import { createFileRoute } from "@tanstack/react-router";
import { ProjectGrid } from "@/components/project-grid";
import { categories, type ProjectCategory } from "@/lib/projects";
import { site } from "@/lib/site";

type ProjectsSearch = {
  cat?: string;
  job?: string;
};

export const Route = createFileRoute("/projects")({
  validateSearch: (search: Record<string, unknown>): ProjectsSearch => ({
    cat: typeof search.cat === "string" ? search.cat : undefined,
    job: typeof search.job === "string" ? search.job : undefined,
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const search = Route.useSearch();
  const catIds = categories.map((c) => c.id);
  const initialFilter = catIds.includes(search.cat as ProjectCategory | "all")
    ? (search.cat as ProjectCategory | "all")
    : "all";

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Gallery</p>
      <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">The work.</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        One job is one tile. Extra angles open in the photo. Same buildings as{" "}
        <a
          href={site.facebook}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-barn hover:underline"
        >
          Facebook
        </a>
        . Filter barns and storage, garages and shops, or barndos and homes.
      </p>
      <div className="mt-10">
        <ProjectGrid initialFilter={initialFilter} openId={search.job} />
      </div>
    </main>
  );
}
