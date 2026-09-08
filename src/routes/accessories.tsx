import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CupolaElevation,
  ExtraOptionMark,
  RoofVentElevation,
  WalkDoorElevation,
  WindowElevation,
} from "@/components/option-diagrams";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/accessories")({ component: AccessoriesPage });

function AccessoriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Accessories</p>
      <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">On the shell.</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Walk doors, windows, roof vents, cupolas. Options — not a fourth building type. {site.pitch}
      </p>

      <ul className="mt-12 grid gap-8 lg:grid-cols-2">
        <li className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
          <WalkDoorElevation />
          <div className="p-5">
            <h2 className="font-display text-xl text-ink">Walk doors</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Typical 3′-0″ × 6′-8″ steel. Solid 6-panel or half-lite / 9-lite. Insulated leaf when
              heated. Place beside the overheads.
            </p>
            <Button asChild variant="outline" size="sm" className="mt-4">
              <Link to="/quote" search={{ walkDoors: "1" }}>
                Quote a walk door
              </Link>
            </Button>
          </div>
        </li>
        <li className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
          <WindowElevation />
          <div className="p-5">
            <h2 className="font-display text-xl text-ink">Windows</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Sliders and single-hung. Grids if they want the house look. Shop glass where you work.
              Barndo glass on the living wall.
            </p>
            <Button asChild variant="outline" size="sm" className="mt-4">
              <Link to="/quote" search={{ windows: "few" }}>
                Quote windows
              </Link>
            </Button>
          </div>
        </li>
        <li className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
          <RoofVentElevation />
          <div className="p-5">
            <h2 className="font-display text-xl text-ink">Roof vents</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Ridge vent with soffit/eave intake. Gable-end louvers. Vents work WITH insulation.
            </p>
            <Button asChild variant="outline" size="sm" className="mt-4">
              <Link to="/quote" search={{ ridgeVent: "yes" }}>
                Quote a ridge vent
              </Link>
            </Button>
          </div>
        </li>
        <li className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
          <CupolaElevation />
          <div className="p-5">
            <h2 className="font-display text-xl text-ink">Cupolas</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Louvered sides, roof to match, optional weathervane. A cupola sits on the ridge of a
              gabled building.
            </p>
            <Button asChild variant="outline" size="sm" className="mt-4">
              <Link to="/quote" search={{ cupola: "one" }}>
                Quote a cupola
              </Link>
            </Button>
          </div>
        </li>
      </ul>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-xl">
          <img
            src="/buildings/shop-gallatin-red.jpg"
            alt="Walk door and windows on the Gallatin red shop — Barn Central"
            className="aspect-[16/10] w-full object-cover object-[38%_58%]"
          />
          <figcaption className="mt-2 text-sm text-muted">
            Walk door and windows on the Gallatin shop.
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl">
          <img
            src="/buildings/r1b-wrap-porch.jpg"
            alt="Timber wrap porch on a Barn Central building"
            className="aspect-[16/10] w-full object-cover object-[50%_78%]"
          />
          <figcaption className="mt-2 text-sm text-muted">
            Timber porch posts wrapping the eave — an accessory off the main building.
          </figcaption>
        </figure>
      </section>

      <h2 className="mt-16 font-display text-2xl text-ink">Also on the shell</h2>
      <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {(
          [
            ["wainscot", "Wainscot"],
            ["gutters", "Gutters"],
            ["liner", "Liner panel"],
            ["posts", "Porch posts"],
          ] as const
        ).map(([kind, label]) => (
          <li key={kind} className="overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)]">
            <ExtraOptionMark kind={kind} />
            <p className="p-3 font-display text-base text-ink">{label}</p>
          </li>
        ))}
      </ul>

      <Button asChild className="mt-12">
        <Link to="/quote">Get a quote</Link>
      </Button>
    </main>
  );
}
