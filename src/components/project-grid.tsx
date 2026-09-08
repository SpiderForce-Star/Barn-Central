import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  categories,
  slidesOf,
  type Project,
  type ProjectCategory,
  projects,
} from "@/lib/projects";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProjectGrid({
  limit,
  showFilters = true,
  onlyIds,
  initialFilter = "all",
  openId,
}: {
  limit?: number;
  showFilters?: boolean;
  onlyIds?: readonly string[];
  initialFilter?: ProjectCategory | "all";
  openId?: string;
}) {
  const [filter, setFilter] = useState<ProjectCategory | "all">(initialFilter);
  const [active, setActive] = useState<Project | null>(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  useEffect(() => {
    if (!openId) return;
    const found = projects.find((p) => p.id === openId);
    if (found) {
      setActive(found);
      setSlide(0);
    }
  }, [openId]);

  const list = useMemo(() => {
    const pool = onlyIds
      ? onlyIds.map((id) => projects.find((p) => p.id === id)).filter((p): p is Project => Boolean(p))
      : projects;
    const src = filter === "all" ? pool : pool.filter((p) => p.category === filter);
    return typeof limit === "number" ? src.slice(0, limit) : src;
  }, [filter, limit, onlyIds]);

  const slides = active ? slidesOf(active) : [];
  const current = slides[slide] ?? active?.image;

  useEffect(() => {
    if (!active) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setSlide((n) => (n + 1) % slides.length);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSlide((n) => (n - 1 + slides.length) % slides.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, slides.length]);

  function open(project: Project) {
    setActive(project);
    setSlide(0);
  }

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
              onClick={() => open(p)}
              className="group w-full overflow-hidden rounded-lg bg-cream text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-border-hover)]"
            >
              <span className="block aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: p.objectPosition ?? "50% 50%" }}
                />
              </span>
              <span className="block p-4">
                <span className="block font-display text-lg text-ink">{p.title}</span>
                <span className="mt-1 block text-sm text-muted">
                  {p.spec ?? p.location ?? "Middle Tennessee"}
                </span>
                {p.features?.length ? (
                  <span className="mt-3 flex flex-wrap gap-1.5">
                    {p.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-md bg-paper px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink/70"
                      >
                        {f}
                      </span>
                    ))}
                  </span>
                ) : null}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {list.length === 0 ? (
        <p className="rounded-lg bg-cream px-4 py-8 text-sm leading-relaxed text-muted">
          No photos in this category on the site yet. More jobs live on{" "}
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-barn hover:underline"
          >
            Facebook
          </a>
          .
        </p>
      ) : null}

      <Dialog
        open={!!active}
        onOpenChange={(o) => {
          if (!o) {
            setActive(null);
            setSlide(0);
          }
        }}
      >
        <DialogContent className="p-0">
          {active && current ? (
            <div>
              <img
                src={current}
                alt={active.title}
                className="max-h-[56vh] w-full rounded-t-xl object-cover object-center"
              />
              {slides.length > 1 ? (
                <div className="flex gap-2 overflow-x-auto px-4 pt-3">
                  {slides.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setSlide(i)}
                      className={cn(
                        "h-16 w-20 shrink-0 overflow-hidden rounded-md ring-offset-2 ring-offset-paper",
                        i === slide ? "ring-2 ring-barn" : "opacity-80 hover:opacity-100",
                      )}
                      aria-label={`Photo ${i + 1} of ${slides.length}`}
                    >
                      <img src={src} alt="" className="size-full object-cover" />
                    </button>
                  ))}
                </div>
              ) : null}
              <div className="space-y-3 p-5">
                <DialogTitle>{active.title}</DialogTitle>
                <DialogDescription>{active.spec ?? active.location ?? "Middle Tennessee"}</DialogDescription>
                {active.features?.length ? (
                  <div className="flex flex-wrap gap-1.5">
                    {active.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-md bg-cream px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink/70"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                ) : null}
                <p className="text-sm leading-relaxed text-ink/80">{active.notes}</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link to="/quote">Get a quote like this</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={site.facebook} target="_blank" rel="noreferrer">
                      See more on Facebook
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
