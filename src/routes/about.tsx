import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cities, site } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <section className="relative min-h-[50vh] overflow-hidden">
        <img
          src="/buildings/fb-porch-left.jpg"
          alt="Timber porch on a white metal barn — Barn Central, Bethpage"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl items-end px-4 pb-12 pt-28 sm:px-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-clay">About</p>
            <h1 className="mt-3 max-w-2xl font-display text-3xl text-cream md:text-5xl">
              Built here. For here.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-ink/85">
            {site.tagline} {site.pitch}
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Three kinds of structure: barns and storage, garages and shops, barndos and
            homes. The job is not a kit dropped on a hillside. It is a pad that drains,
            a frame that stands the wind, doors that match the equipment, and a porch
            you can actually use. Recent work includes a 50×60×16 shop in Bethpage with
            two 12×60 porches.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Call {site.phone} or send a size through the quote tool. We will talk
            through the site, the use, and a number that matches both.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/quote">Get a quote</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={site.phoneHref}>{site.phone}</a>
            </Button>
            <Button asChild variant="ghost">
              <a href={site.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </Button>
          </div>
        </div>
        <aside className="rounded-xl bg-cream p-6 lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Where we work</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Sumner County and the rest of Middle Tennessee. Towns we already have jobs
            around:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {cities.map((c) => (
              <li
                key={c}
                className="rounded-md bg-paper px-3 py-1.5 text-sm text-ink/80"
              >
                {c}
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
