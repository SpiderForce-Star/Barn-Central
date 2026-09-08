import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { site, wallColors } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/colors")({ component: ColorsPage });

function ColorsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Colors</p>
      <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">Panels and trim</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Walls, roof, and trim from this chart. We’ll lock color on your spec.
      </p>

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {wallColors.map((c) => (
          <li key={c.id}>
            <Link to="/quote" search={{ color: c.id }} className="group block">
              <span
                className={cn(
                  "block aspect-square rounded-lg border border-border shadow-[var(--shadow-border)]",
                  "metallic" in c && c.metallic && "swatch-metallic",
                )}
                style={"metallic" in c && c.metallic ? undefined : { background: c.hex }}
              />
              <span className="mt-2 block font-display text-base text-ink group-hover:text-barn">{c.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
        Wall, roof, and trim can be different colors from this same list. Bethpage is white walls and
        a charcoal roof. Gallatin is red walls and a black roof. The tan barndo is tan walls and a
        red roof.
      </p>

      <Button asChild className="mt-8">
        <Link to="/quote">Quote this color</Link>
      </Button>
      <p className="mt-3 text-xs text-muted">{site.pitch}</p>
    </main>
  );
}
