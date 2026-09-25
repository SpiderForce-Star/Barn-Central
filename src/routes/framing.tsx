import { createFileRoute, Link } from "@tanstack/react-router";
import { FramingElevation } from "@/components/building-preview";
import { Button } from "@/components/ui/button";
import { framingTypes } from "@/lib/site";

const doorTypes = [
  {
    title: "Walk door",
    note: "A personnel door beside an overhead or on the eave. Day-to-day entry without opening the bay.",
  },
  {
    title: "Double walk doors, removable mullion",
    note: "Two walk doors in one framed opening. The center mullion comes out so a wider load can pass, then goes back in when they close as a pair.",
  },
  {
    title: "Sliding door",
    note: "Hangs on a track and rolls to one side. It needs clear wall beside the opening. The door does not lift into the trusses, so the bay keeps its full height.",
  },
  {
    title: "T-sliding door",
    note: "A split slider. Two leaves meet at the center and each one rolls to its own side on the track, so the whole opening is clear.",
  },
  {
    title: "Bi-fold door",
    note: "Panels fold out of the opening instead of rolling aside or lifting overhead. Used on a gable end when the bay has to take large farm equipment.",
  },
] as const;

export const Route = createFileRoute("/framing")({ component: FramingPage });

function FramingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Framing</p>
      <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">Framing and doors</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Pick the roof. The quote drawing uses these same shapes — gable-end elevation, not a 3D toy.
        The pad is chosen on the quote.
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

      <h2 className="mt-16 font-display text-2xl text-ink">Doors</h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        The opening is framed with the building. These are the doors that go in it.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {doorTypes.map((d) => (
          <li key={d.title} className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
            <h3 className="font-display text-xl text-ink">{d.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{d.note}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 font-display text-2xl text-ink">Posts, lumber, and trusses</h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        This is the skeleton under the 29-gauge MAC rib — the same post-frame language the regional
        shops sell, written as we actually set it.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        <li className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
          <h3 className="font-display text-xl text-ink">CCA-treated posts</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Buried about 3′ and surrounded with concrete. Sunken-post foundation — dirt, gravel, or
            a later slab.
          </p>
        </li>
        <li className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
          <h3 className="font-display text-xl text-ink">No. 2 and better frame</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Main-frame lumber graded No. 2 and better. Girts, headers, and openings laid out to the
            spec.
          </p>
        </li>
        <li className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
          <h3 className="font-display text-xl text-ink">No. 1 engineered trusses</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Engineered roof trusses in No. 1 grade. Clear span for equipment, stalls, or living.
          </p>
        </li>
      </ul>

      <Button asChild className="mt-12">
        <Link to="/quote">Quote framing and doors</Link>
      </Button>
    </main>
  );
}
