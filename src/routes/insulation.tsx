import { createFileRoute, Link } from "@tanstack/react-router";
import { InsulationCutaway } from "@/components/option-diagrams";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/insulation")({ component: InsulationPage });

const systems = [
  {
    id: "condensation" as const,
    title: "Condensation control on the roof steel",
    body: "Factory fabric / drip-stop. Little R-value. Baseline on most metal roofs.",
    quote: "condensation",
  },
  {
    id: "blanket" as const,
    title: "Vinyl-faced fiberglass blanket",
    body: "Banded between girts and purlins, facing inside.",
    quote: "blanket",
  },
  {
    id: "foil" as const,
    title: "Reflective bubble / foil",
    body: "Radiant barrier. Needs the air space the product calls for.",
    quote: "blanket",
  },
  {
    id: "board" as const,
    title: "Rigid foam board",
    body: "Polyiso or similar under the steel, seams taped.",
    quote: "blanket",
  },
  {
    id: "spray" as const,
    title: "Closed-cell spray foam to the back of the steel",
    body: "Air seal + vapor retarder + about R-6 to R-7 per inch (industry typical, not a promise). Typically a specialty sub; we coordinate the shell.",
    quote: "spray",
  },
  {
    id: "blown" as const,
    title: "Ceiling + blown insulation",
    body: "Barndo / living. Finish a ceiling, vent soffit and ridge, blow the attic floor.",
    quote: "living",
  },
];

function InsulationPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Insulation</p>
      <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">Insulation and condensation</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
        Middle Tennessee is IECC Climate Zone 4A — mixed-humid. Summers push moisture in. Winters
        push it out. On a metal-clad post-frame building the steel is the cold surface. If warm air
        hits that steel, it sweats. Insulation keeps the steel off the dew point. Ventilation lets
        leftover moisture leave.
      </p>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Barns / Storage",
            body: "Stop drips. Condensation control on the roof steel. Vent the ridge.",
          },
          {
            title: "Garage / Shops",
            body: "Heated or not. Blanket or foam so the roof does not rain on the tools.",
          },
          {
            title: "Barndos / Homes",
            body: "Conditioned space. Code shows up here. We design the shell; the insulation package matches how you will live in it. County requirements vary.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl bg-cream p-5">
            <h2 className="font-display text-lg text-ink">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </section>

      <h2 className="mt-16 font-display text-2xl text-ink">Systems</h2>
      <ul className="mt-6 grid gap-6 lg:grid-cols-2">
        {systems.map((s) => (
          <li key={s.id} className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
            <InsulationCutaway kind={s.id} />
            <div className="p-5">
              <h3 className="font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link to="/quote" search={{ insulation: s.quote }}>
                  Quote this intent
                </Link>
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <section className="mt-14 rounded-xl bg-cream p-6 md:p-8">
        <h2 className="font-display text-xl text-ink">Honest notes</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          <li className="border-l-2 border-wood pl-3">Do not trap a cavity between two vapor retarders.</li>
          <li className="border-l-2 border-wood pl-3">
            Open-cell foam on cold steel is a condensation risk in this climate.
          </li>
          <li className="border-l-2 border-wood pl-3">
            A residence in Zone 4A is a different spec than a hay barn. Do not guess the R-value on
            the website.
          </li>
        </ul>
      </section>

      <p className="mt-8 text-sm text-muted">{site.pitch}</p>
      <Button asChild className="mt-6">
        <Link to="/quote">Get a quote</Link>
      </Button>
    </main>
  );
}
