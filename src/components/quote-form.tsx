import { useMemo, useState, type FormEvent } from "react";
import { BuildingPreview } from "@/components/building-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildingTypes, counties, site, wallColors } from "@/lib/site";
import { cn } from "@/lib/utils";

export type QuoteState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  county: string;
  type: string;
  width: number;
  length: number;
  height: number;
  porch: "none" | "one" | "two";
  porchDepth: number;
  colorId: string;
  slab: "yes" | "no" | "later";
  timeline: string;
  notes: string;
};

const defaults: QuoteState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  county: "Sumner",
  type: "barn",
  width: 40,
  length: 60,
  height: 14,
  porch: "two",
  porchDepth: 12,
  colorId: "white",
  slab: "later",
  timeline: "",
  notes: "",
};

function footprint(q: QuoteState) {
  const main = q.width * q.length;
  const porchW = q.porch === "none" ? 0 : q.porch === "two" ? q.porchDepth * 2 : q.porchDepth;
  const porch = porchW * q.length;
  return { main, porch, total: main + porch };
}

function mailBody(q: QuoteState, sq: ReturnType<typeof footprint>) {
  return [
    `Quote request from ${q.name}`,
    `Phone: ${q.phone}`,
    `Email: ${q.email}`,
    `City: ${q.city}  County: ${q.county}`,
    ``,
    `Type: ${q.type}`,
    `Size: ${q.width} x ${q.length} x ${q.height}`,
    `Porch: ${q.porch}${q.porch === "none" ? "" : ` · ${q.porchDepth}' deep`}`,
    `Color: ${q.colorId}`,
    `Slab: ${q.slab}`,
    `Timeline: ${q.timeline || "not specified"}`,
    `Footprint: ${sq.total.toLocaleString()} sf (building ${sq.main.toLocaleString()} + porch ${sq.porch.toLocaleString()})`,
    ``,
    q.notes ? `Notes:\n${q.notes}` : "Notes: (none)",
  ].join("\n");
}

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [q, setQ] = useState<QuoteState>(defaults);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const sq = useMemo(() => footprint(q), [q]);

  function set<K extends keyof QuoteState>(key: K, value: QuoteState[K]) {
    setQ((prev) => ({ ...prev, [key]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (q.name.trim().length < 2 || q.phone.trim().length < 7) {
      setError("Name and a working phone number, please.");
      return;
    }
    setError("");
    const subject = `Quote · ${q.width}x${q.length}x${q.height} ${q.type} · ${q.city || q.county}`;
    const href = `${site.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody(q, sq))}`;
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
          Your mail app should open with the size, porches, and contact details. If it
          does not, call {site.phone} or write {site.email}.
        </p>
        <dl className="mt-6 grid gap-2 text-sm text-ink sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted">Building</dt>
            <dd>
              {q.width}×{q.length}×{q.height} · {q.type}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted">Footprint</dt>
            <dd>{sq.total.toLocaleString()} sf</dd>
          </div>
        </dl>
        <Button className="mt-6" type="button" variant="outline" onClick={() => setSent(false)}>
          Edit the spec
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-8 lg:grid-cols-12">
      <div className={cn("lg:col-span-5", compact && "lg:col-span-12")}>
        <BuildingPreview
          width={q.width}
          length={q.length}
          height={q.height}
          porch={q.porch}
          porchDepth={q.porchDepth}
          colorId={q.colorId}
        />
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-md bg-cream px-2 py-3">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">Building</p>
            <p className="mt-1 font-display text-xl tabular-nums text-ink">
              {sq.main.toLocaleString()}
              <span className="text-sm text-muted"> sf</span>
            </p>
          </div>
          <div className="rounded-md bg-cream px-2 py-3">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">Porch</p>
            <p className="mt-1 font-display text-xl tabular-nums text-ink">
              {sq.porch.toLocaleString()}
              <span className="text-sm text-muted"> sf</span>
            </p>
          </div>
          <div className="rounded-md bg-barn px-2 py-3 text-cream">
            <p className="text-xs uppercase tracking-[0.14em] text-clay">Total</p>
            <p className="mt-1 font-display text-xl tabular-nums">
              {sq.total.toLocaleString()}
              <span className="text-sm text-cream/70"> sf</span>
            </p>
          </div>
        </div>
      </div>

      <div className={cn("grid gap-5 lg:col-span-7", compact && "lg:col-span-12")}>
        <fieldset className="grid gap-3">
          <Label>Building type</Label>
          <div className="flex flex-wrap gap-2">
            {buildingTypes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => set("type", t.id)}
                className={cn(
                  "h-10 rounded-md px-3 text-sm",
                  q.type === t.id ? "bg-barn text-cream" : "bg-cream text-ink hover:bg-secondary",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-3">
          <SliderField label="Width" unit="ft" min={20} max={80} value={q.width} onChange={(v) => set("width", v)} />
          <SliderField label="Length" unit="ft" min={20} max={120} value={q.length} onChange={(v) => set("length", v)} />
          <SliderField label="Eave height" unit="ft" min={8} max={20} value={q.height} onChange={(v) => set("height", v)} />
        </div>

        <fieldset className="grid gap-3">
          <Label>Porches</Label>
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["none", "None"],
                ["one", "One side"],
                ["two", "Both sides"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => set("porch", id)}
                className={cn(
                  "h-10 rounded-md px-3 text-sm",
                  q.porch === id ? "bg-barn text-cream" : "bg-cream text-ink hover:bg-secondary",
                )}
              >
                {label}
              </button>
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
        </fieldset>

        <fieldset className="grid gap-3">
          <Label>Wall color</Label>
          <div className="flex flex-wrap gap-2">
            {wallColors.map((c) => (
              <button
                key={c.id}
                type="button"
                title={c.label}
                onClick={() => set("colorId", c.id)}
                className={cn(
                  "size-9 rounded-full border border-border",
                  q.colorId === c.id && "ring-2 ring-ring ring-offset-2 ring-offset-paper",
                )}
                style={{ background: c.wall }}
                aria-label={c.label}
              />
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="slab">Concrete slab</Label>
            <select
              id="slab"
              value={q.slab}
              onChange={(e) => set("slab", e.target.value as QuoteState["slab"])}
              className="h-11 rounded-md border border-border bg-paper px-3 text-sm text-ink"
            >
              <option value="yes">Yes, include a slab</option>
              <option value="no">No slab — gravel only</option>
              <option value="later">Decide later</option>
            </select>
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
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={q.name} onChange={(e) => set("name", e.target.value)} required autoComplete="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={q.phone} onChange={(e) => set("phone", e.target.value)} required autoComplete="tel" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={q.email}
              onChange={(e) => set("email", e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" value={q.city} onChange={(e) => set("city", e.target.value)} />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="timeline">When do you want to build?</Label>
          <Input
            id="timeline"
            placeholder="This fall, spring 2027…"
            value={q.timeline}
            onChange={(e) => set("timeline", e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="notes">Anything else</Label>
          <Textarea
            id="notes"
            placeholder="Doors, lean-tos, living space, site access…"
            value={q.notes}
            onChange={(e) => set("notes", e.target.value)}
          />
        </div>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="lg">
            Send this spec
          </Button>
          <p className="text-xs text-muted">
            Opens an email to {site.email}. No account. No spam list.
          </p>
        </div>
      </div>
    </form>
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
      <span className="flex items-baseline justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted">{label}</span>
        <span className="font-display text-lg tabular-nums text-ink">
          {value}
          <span className="ml-0.5 text-xs text-muted">{unit}</span>
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
