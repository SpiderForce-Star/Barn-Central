import { createFileRoute, Link } from "@tanstack/react-router";
import { FoundationSection, FramingElevation } from "@/components/building-preview";
import { Button } from "@/components/ui/button";
import { foundationTypes, framingTypes, site } from "@/lib/site";

export const Route = createFileRoute("/framing")({ component: FramingPage });

function FramingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Framing</p>
      <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">Framing and foundations</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {site.pitch} Pick the roof and the pad. The quote drawing uses these same shapes — gable-end
        elevation, not a 3D toy.
      </p>

      <h2 className="mt-14 font-display text-2xl text-ink">Roof framing</h2>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {framingTypes.map((f) => (
          <li key={f.id} className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
            <FramingElevation framing={f.id} />
            <div className="p-5">
              <h3 className="font-display text-xl text-ink">{f.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.note}</p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link to="/quote" search={{ framing: f.id }}>
                  Quote this framing
                </Link>
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 font-display text-2xl text-ink">Foundations</h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        Sunken-post foundation, laid out from the framing. The pad can be level/graded dirt or
        gravel. Solid concrete is available. You can gravel a storage bay and pour a full concrete
        floor in the living or shop area of the same building.
      </p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {foundationTypes.map((f) => (
          <li key={f.id} className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
            <FoundationSection foundation={f.id} />
            <div className="p-5">
              <h3 className="font-display text-xl text-ink">{f.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.note}</p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link to="/quote" search={{ foundation: f.id }}>
                  Quote this pad
                </Link>
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <Button asChild className="mt-12">
        <Link to="/quote">Quote framing and pad</Link>
      </Button>
    </main>
  );
}
