import { createFileRoute } from "@tanstack/react-router";
import { ProjectGrid } from "@/components/project-grid";
import { site } from "@/lib/site";

export const Route = createFileRoute("/projects")({ component: ProjectsPage });

function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Gallery</p>
      <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">The work.</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Photos from Barn Central jobs — the same ones on{" "}
        <a
          href={site.facebook}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-barn hover:underline"
        >
          Facebook
        </a>
        . Filter barns and storage, garages and shops, or barndos and homes. Tap a
        photo for the spec.
      </p>
      <div className="mt-10">
        <ProjectGrid />
      </div>
    </main>
  );
}
