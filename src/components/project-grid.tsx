import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { categories, type Project, type ProjectCategory, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function ProjectGrid({
  limit,
  showFilters = true,
}: {
  limit?: number;
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [active, setActive] = useState<Project | null>(null);

  const list = useMemo(() => {
    const src = filter === "all" ? projects : projects.filter((p) => p.category === filter);
    return typeof limit === "number" ? src.slice(0, limit) : src;
  }, [filter, limit]);

  return (
    <div>
      {showFilters ? (
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilter(c.id)}
              className={cn(
                "h-10 rounded-md px-3 text-sm",
                filter === c.id ? "bg-barn text-cream" : "bg-cream text-ink hover:bg-secondary",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      ) : null}

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => setActive(p)}
              className="group w-full overflow-hidden rounded-lg bg-cream text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-border-hover)]"
            >
              <span className="block aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </span>
              <span className="block p-4">
                <span className="block font-display text-lg text-ink">{p.title}</span>
                <span className="mt-1 block text-sm text-muted">
                  {p.spec ?? p.location ?? "Middle Tennessee"}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="p-0">
          {active ? (
            <div>
              <img
                src={active.image}
                alt={active.title}
                className="max-h-[56vh] w-full rounded-t-xl object-cover"
              />
              <div className="space-y-3 p-5">
                <DialogTitle>{active.title}</DialogTitle>
                <DialogDescription>
                  {[active.spec, active.location].filter(Boolean).join(" · ") || "Middle Tennessee"}
                </DialogDescription>
                <p className="text-sm leading-relaxed text-ink/80">{active.notes}</p>
                <Button asChild>
                  <Link to="/quote">Build one like this</Link>
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
