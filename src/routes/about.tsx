import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cities, processSteps, site } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main className="pb-20 pt-28">
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">About</p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-5xl">
          We design to your needs and wants.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/85">
          We supply and construct on your site. {site.tagline}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Three kinds of structure: barns and storage, garages and shops, barndos and homes. The job
          is not a kit dropped on a hillside. It is a pad that drains, a frame that stands the wind,
          doors that match the equipment, and a porch you can actually use.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Call {site.phone} or send a size through the quote tool. We will talk through the site, the
          use, and a number that matches both.
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
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="rounded-xl bg-cream p-6 md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Where we work</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Sumner, Wilson, Davidson, Robertson, Trousdale, Macon, and nearby counties. Towns we
            already have jobs around:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {cities.map((c) => (
              <li key={c} className="rounded-md bg-paper px-3 py-1.5 text-sm text-ink/80">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
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
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/buildings/shop-gallatin-red.jpg"
            alt="Red metal shop with a wood-post lean-to in Gallatin — Barn Central"
            className="aspect-[16/9] w-full object-cover object-[42%_55%] max-sm:aspect-[4/3]"
          />
        </div>
        <p className="mt-3 text-sm text-muted">Black on red in Gallatin. We raise it on your site.</p>
        <Button asChild className="mt-6">
          <Link to="/quote">Get a quote</Link>
        </Button>
      </section>
    </main>
  );
}
