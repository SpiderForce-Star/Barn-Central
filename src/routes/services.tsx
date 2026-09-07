import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { processSteps, services, site } from "@/lib/site";

export const Route = createFileRoute("/services")({ component: ServicesPage });

const extra: Record<string, string[]> = {
  barns: [
    "Open bays, enclosed walls, or a mix on the gable or eave",
    "Hay, livestock, RV, boat, and tractor storage",
    "Lean-tos and porches in timber or steel",
  ],
  shops: [
    "Garages and enclosed shops with overheads sized to the work",
    "Clear-span floors, walk doors, and room for lifts",
    "Concrete, gravel, insulation, and openings as the job needs them",
  ],
  barndos: [
    "A shell that can finish into living space",
    "Windows, porches, and wall height that leave room for a loft",
    "Shop on one end, house on the other — or all of one, then the other",
  ],
};

function ServicesPage() {
  return (
    <main className="pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Services</p>
        <h1 className="mt-3 max-w-2xl font-display text-3xl text-ink md:text-4xl">
          Barns, shops, and barndos.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {site.pitch} Three kinds of building. Same steel, same pad, same conversation
          about what you actually need the structure to do.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl space-y-20 px-4 sm:px-6">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="grid items-center gap-8 scroll-mt-24 lg:grid-cols-12"
          >
            <div className={i % 2 === 1 ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
              <img
                src={s.image}
                alt={s.title}
                className="aspect-[4/3] w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="lg:col-span-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-2xl text-ink md:text-3xl">{s.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{s.blurb}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink/80">
                {(extra[s.id] ?? []).map((line) => (
                  <li key={line} className="border-l-2 border-wood pl-3">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl text-ink">From call to keys</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.n} className="rounded-lg bg-cream p-4">
              <p className="font-display text-xl text-wood">{step.n}</p>
              <h3 className="mt-2 font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <Button asChild className="mt-10">
          <Link to="/quote">Start with a size</Link>
        </Button>
      </section>
    </main>
  );
}
