import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { BuildingPreview } from "@/components/building-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  buildingTypes,
  colorById,
  counties,
  cupolaById,
  cupolaOptions,
  foundationById,
  foundationTypes,
  framingById,
  framingTypes,
  insulationById,
  insulationIntents,
  site,
  walkDoorById,
  walkDoorOptions,
  wallColors,
  windowById,
  windowOptions,
  type CupolaId,
  type FoundationId,
  type FramingId,
  type InsulationId,
  type WalkDoorId,
  type WindowId,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export type QuoteState = {
  name: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  county: string;
  zip: string;
  description: string;
  type: string;
  width: number;
  length: number;
  height: number;
  framing: FramingId;
  foundation: FoundationId;
  wallColorId: string;
  roofColorId: string;
  trimColorId: string;
  porch: "none" | "one" | "two";
  porchDepth: number;
  walkDoors: WalkDoorId;
  windows: WindowId;
  ridgeVent: "yes" | "no";
  cupola: CupolaId;
  insulation: InsulationId;
  timeline: string;
};

export type QuoteInit = {
  color?: string;
  framing?: string;
  foundation?: string;
  type?: string;
  insulation?: string;
  walkDoors?: string;
  windows?: string;
  cupola?: string;
  ridgeVent?: string;
};

function defaultsFrom(init?: QuoteInit): QuoteState {
  const wall = colorById(init?.color ?? "white");
  const framing = framingById(init?.framing ?? "gabled").id;
  const foundation = foundationById(init?.foundation ?? "post-gravel").id;
  const type = buildingTypes.some((t) => t.id === init?.type) ? init!.type! : "barn";
  const insulation = insulationById(init?.insulation ?? "none").id;
  const walkDoors = walkDoorById(init?.walkDoors ?? "0").id;
  const windows = windowById(init?.windows ?? "none").id;
  const cupola = cupolaById(init?.cupola ?? "none").id;
  const ridgeVent = init?.ridgeVent === "yes" ? "yes" : "no";
  return {
    name: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    county: "Sumner",
    zip: "",
    description: "",
    type,
    width: 40,
    length: 60,
    height: 14,
    framing,
    foundation,
    wallColorId: wall.id,
    roofColorId: wall.roofId,
    trimColorId: "charcoal",
    porch: "none",
    porchDepth: 12,
    walkDoors,
    windows,
    ridgeVent,
    cupola,
    insulation,
    timeline: "",
  };
}

function typeLabel(id: string) {
  return buildingTypes.find((t) => t.id === id)?.label ?? id;
}

function addressLine(q: QuoteState) {
  const parts = [
    q.street,
    q.city,
    q.county !== "Other" ? `${q.county} County` : q.county,
    q.zip ? `TN ${q.zip}` : "TN",
  ].filter((p) => p && String(p).trim());
  return parts.join(", ");
}

function mailBody(q: QuoteState) {
  const porch =
    q.porch === "none"
      ? "none"
      : q.porch === "two"
        ? `two ${q.porchDepth}' porches`
        : `one ${q.porchDepth}' porch`;
  return [
    `Quote request from ${q.name}`,
    `Phone: ${q.phone}`,
    `Email: ${q.email || "(not given)"}`,
    `Build location: ${addressLine(q) || "(not given)"}`,
    ``,
    `Looking for:`,
    q.description.trim(),
    ``,
    `Type: ${typeLabel(q.type)}`,
    `Size: ${q.width} x ${q.length} x ${q.height} (optional — see description)`,
    `Framing: ${framingById(q.framing).label}`,
    `Foundation: ${foundationById(q.foundation).label}`,
    `Wall: ${colorById(q.wallColorId).label}`,
    `Roof: ${colorById(q.roofColorId).label}`,
    `Trim: ${colorById(q.trimColorId).label}`,
    `Porch: ${porch}`,
    `Walk doors: ${walkDoorById(q.walkDoors).label}`,
    `Windows: ${windowById(q.windows).label}`,
    `Ridge vent: ${q.ridgeVent === "yes" ? "yes" : "no"}`,
    `Cupola: ${cupolaById(q.cupola).label}`,
    `Insulation: ${insulationById(q.insulation).label}`,
    `Timeline: ${q.timeline.trim() || "not specified"}`,
  ].join("\n");
}

export function QuoteForm(init?: QuoteInit) {
  const [q, setQ] = useState<QuoteState>(() => defaultsFrom(init));
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const specLine = useMemo(() => {
    return `${q.width}×${q.length}×${q.height} ${typeLabel(q.type).toLowerCase()} · ${framingById(q.framing).label.toLowerCase()}`;
  }, [q.width, q.length, q.height, q.type, q.framing]);

  function set<K extends keyof QuoteState>(key: K, value: QuoteState[K]) {
    setQ((prev) => ({ ...prev, [key]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const hasPlace = q.city.trim().length >= 2 || Boolean(q.county);
    if (q.name.trim().length < 2 || q.phone.trim().length < 7) {
      setError("Name and a working phone number, please.");
      return;
    }
    if (!hasPlace) {
      setError("City or county — where we supply and construct.");
      return;
    }
    if (q.description.trim().length < 8) {
      setError("Tell us what you’re looking for. Size numbers are optional if the description is there.");
      return;
    }
    setError("");
    const subject = `Quote · ${q.name}${q.city ? ` · ${q.city}` : ""}`;
    const href = `${site.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody(q))}`;
    window.location.href = href;
    try {
      localStorage.setItem("barn-central-quote", JSON.stringify(q));
    } catch {
      /* ignore */
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-cream p-6 md:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Request ready</p>
        <h3 className="mt-2 font-display text-2xl text-ink">Your spec is on its way.</h3>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
          Your mail app should open to {site.email}. If it does not, email us at that address or
          call {site.phone}.
        </p>
        <p className="mt-4 font-display text-lg text-ink">{specLine}</p>
        <Button className="mt-6" type="button" variant="outline" onClick={() => setSent(false)}>
          Edit the spec
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-8 lg:grid-cols-12 lg:items-start">
      <div className="grid gap-8 lg:col-span-7">
        <fieldset className="grid gap-4">
          <legend className="font-display text-xl text-ink">You</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Full name *</Label>
              <Input
                id="name"
                value={q.name}
                onChange={(e) => set("name", e.target.value)}
                required
                autoComplete="name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                value={q.phone}
                onChange={(e) => set("phone", e.target.value)}
                required
                autoComplete="tel"
              />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={q.email}
                onChange={(e) => set("email", e.target.value)}
                autoComplete="email"
              />
            </div>
          </div>
        </fieldset>
      </div>

      <div className="lg:col-span-5 lg:row-span-6 lg:sticky lg:top-24">
        <BuildingPreview
          width={q.width}
          length={q.length}
          height={q.height}
          porch={q.porch}
          porchDepth={q.porchDepth}
          wallColorId={q.wallColorId}
          roofColorId={q.roofColorId}
          trimColorId={q.trimColorId}
          framing={q.framing}
          foundation={q.foundation}
          walkDoors={q.walkDoors}
          windows={q.windows}
          ridgeVent={q.ridgeVent === "yes"}
          cupola={q.cupola}
        />
        <p className="mt-3 font-display text-lg text-ink">{specLine}</p>
        <p className="mt-1 text-sm text-muted">
          2D elevation. Framing, pad, and accessory chips switch the drawing. Not a 3D model.
        </p>
      </div>

      <div className="grid gap-8 lg:col-span-7">
        <fieldset className="grid gap-4">
          <legend className="font-display text-xl text-ink">Ship-to / build location *</legend>
          <p className="text-sm text-muted">This is where we supply and construct.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="street">Street / 911 address</Label>
              <Input
                id="street"
                value={q.street}
                onChange={(e) => set("street", e.target.value)}
                autoComplete="street-address"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={q.city}
                onChange={(e) => set("city", e.target.value)}
                autoComplete="address-level2"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="county">County</Label>
              <select
                id="county"
                value={q.county}
                onChange={(e) => set("county", e.target.value)}
                className="h-11 rounded-md border border-border bg-paper px-3 text-sm text-ink"
              >
                {counties.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="zip">ZIP</Label>
              <Input
                id="zip"
                value={q.zip}
                onChange={(e) => set("zip", e.target.value)}
                autoComplete="postal-code"
                inputMode="numeric"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="grid gap-3">
          <legend className="font-display text-xl text-ink">What you’re looking for *</legend>
          <Label htmlFor="description" className="sr-only">
            Description
          </Label>
          <Textarea
            id="description"
            required
            className="min-h-36"
            placeholder="Barn, shop, or barndo. Size if you know it. Doors, porch, living vs storage, pad, timeline."
            value={q.description}
            onChange={(e) => set("description", e.target.value)}
          />
        </fieldset>

        <fieldset className="grid gap-5">
          <legend className="font-display text-xl text-ink">Building spec</legend>
          <p className="text-sm text-muted">
            Optional if you already wrote the box. Helps us draw the same building.
          </p>

          <div className="grid gap-2">
            <Label>Type</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {buildingTypes.map((t) => (
                <Chip key={t.id} active={q.type === t.id} onClick={() => set("type", t.id)}>
                  {t.label}
                </Chip>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <SliderField label="Width" unit="ft" min={20} max={80} value={q.width} onChange={(v) => set("width", v)} />
            <SliderField
              label="Length"
              unit="ft"
              min={20}
              max={120}
              value={q.length}
              onChange={(v) => set("length", v)}
            />
            <SliderField
              label="Eave height"
              unit="ft"
              min={8}
              max={20}
              value={q.height}
              onChange={(v) => set("height", v)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Framing</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {framingTypes.map((f) => (
                <Chip key={f.id} active={q.framing === f.id} onClick={() => set("framing", f.id)}>
                  {f.label}
                </Chip>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Foundation</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {foundationTypes.map((f) => (
                <Chip key={f.id} active={q.foundation === f.id} onClick={() => set("foundation", f.id)}>
                  {f.label}
                </Chip>
              ))}
            </div>
          </div>

          <ColorRow
            label="Wall"
            value={q.wallColorId}
            onChange={(id) => {
              const c = colorById(id);
              setQ((prev) => ({ ...prev, wallColorId: id, roofColorId: c.roofId }));
            }}
          />
          <ColorRow label="Roof" value={q.roofColorId} onChange={(id) => set("roofColorId", id)} />
          <ColorRow label="Trim" value={q.trimColorId} onChange={(id) => set("trimColorId", id)} />

          <div className="grid gap-3">
            <Label>Porch</Label>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["none", "None"],
                  ["one", "One"],
                  ["two", "Two"],
                ] as const
              ).map(([id, label]) => (
                <Chip key={id} active={q.porch === id} onClick={() => set("porch", id)}>
                  {label}
                </Chip>
              ))}
            </div>
            {q.porch !== "none" ? (
              <SliderField
                label="Porch depth"
                unit="ft"
                min={8}
                max={16}
                value={q.porchDepth}
                onChange={(v) => set("porchDepth", v)}
              />
            ) : null}
          </div>
        </fieldset>

        <fieldset className="grid gap-5">
          <legend className="font-display text-xl text-ink">Accessories</legend>
          <p className="text-sm text-muted">Optional. Walk doors, windows, vents, cupolas — on the shell.</p>
          <div className="grid gap-2">
            <Label>Walk doors</Label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {walkDoorOptions.map((d) => (
                <Chip key={d.id} active={q.walkDoors === d.id} onClick={() => set("walkDoors", d.id)}>
                  {d.label}
                </Chip>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Windows</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {windowOptions.map((w) => (
                <Chip key={w.id} active={q.windows === w.id} onClick={() => set("windows", w.id)}>
                  {w.label}
                </Chip>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Ridge vent</Label>
            <div className="grid grid-cols-2 gap-2">
              <Chip active={q.ridgeVent === "yes"} onClick={() => set("ridgeVent", "yes")}>
                Yes
              </Chip>
              <Chip active={q.ridgeVent === "no"} onClick={() => set("ridgeVent", "no")}>
                No
              </Chip>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Cupola</Label>
            <div className="grid grid-cols-3 gap-2">
              {cupolaOptions.map((c) => (
                <Chip key={c.id} active={q.cupola === c.id} onClick={() => set("cupola", c.id)}>
                  {c.label}
                </Chip>
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset className="grid gap-3">
          <legend className="font-display text-xl text-ink">Insulation intent</legend>
          <p className="text-sm text-muted">Optional. How you will use the building drives the package.</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {insulationIntents.map((i) => (
              <Chip key={i.id} active={q.insulation === i.id} onClick={() => set("insulation", i.id)}>
                {i.label}
              </Chip>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-2">
          <Label htmlFor="timeline">Timeline</Label>
          <Input
            id="timeline"
            placeholder="This fall, spring 2027…"
            value={q.timeline}
            onChange={(e) => set("timeline", e.target.value)}
          />
        </div>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="lg">
            Send this spec
          </Button>
          <Button type="button" size="lg" variant="outline" asChild>
            <a href={site.phoneHref}>Call {site.phone}</a>
          </Button>
        </div>
        <p className="text-xs text-muted">
          Opens an email to {site.email}. No account. This is a spec, not a price.
        </p>
      </div>
    </form>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-11 rounded-md px-3 text-left text-sm",
        active ? "bg-barn text-cream" : "bg-cream text-ink hover:bg-secondary",
      )}
    >
      {children}
    </button>
  );
}

function ColorRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <Label>
        {label}
        <span className="ml-2 font-sans text-[0.7rem] uppercase tracking-[0.12em] text-muted">
          {colorById(value).label}
        </span>
      </Label>
      <div className="flex flex-wrap gap-2">
        {wallColors.map((c) => (
          <button
            key={c.id}
            type="button"
            title={c.label}
            onClick={() => onChange(c.id)}
            className={cn(
              "size-9 overflow-hidden rounded-full border border-border",
              "metallic" in c && c.metallic && "swatch-metallic",
              value === c.id && "ring-2 ring-ring ring-offset-2 ring-offset-paper",
            )}
            style={"metallic" in c && c.metallic ? undefined : { background: c.hex }}
            aria-label={c.label}
          />
        ))}
      </div>
    </div>
  );
}

function SliderField({
  label,
  unit,
  min,
  max,
  value,
  onChange,
}: {
  label: string;
  unit: string;
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="flex items-baseline justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted">{label}</span>
        <span className="inline-flex items-baseline gap-1 font-display text-lg tabular-nums text-ink">
          <input
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={(e) => {
              const n = Number(e.target.value);
              if (Number.isFinite(n)) onChange(Math.min(max, Math.max(min, Math.round(n))));
            }}
            className="w-14 border-0 bg-transparent p-0 text-right font-display text-lg tabular-nums text-ink outline-none"
          />
          <span className="text-xs text-muted">{unit}</span>
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-11 w-full accent-barn"
      />
    </label>
  );
}
