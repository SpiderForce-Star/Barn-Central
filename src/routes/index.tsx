import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { ProjectGrid } from "@/components/project-grid";
import { Button } from "@/components/ui/button";
import { processSteps, services, site } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src="/buildings/hero-bethpage.jpg"
          alt="White metal barn with wood-post porches in Bethpage, Tennessee — a Barn Central job"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-clay">
            Middle Tennessee
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-medium leading-[1.05] text-paper">
            Barns built for the work,
            <br className="hidden sm:block" /> and the weather.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Custom barns, barndominiums, shops, and storage — from the pad to the
            porch. {site.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="invert">
              <Link to="/quote">
                Get a quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream/30 text-cream hover:bg-cream/10">
              <a href={site.phoneHref}>
                <Phone className="size-4" />
                {site.phone}
              </a>
            </Button>
          </div>
          <p className="mt-8 text-sm text-cream/70">
            Recent: 50×60×16 with two 12×60 porches · Bethpage
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          {[
            ["Where", "Bethpage, Gallatin, Portland, and across Middle Tennessee"],
            ["What", "Barns · Barndos · Venues · Warehouses · Storage"],
            ["How", "Dirt work, pad, steel, porches — one crew, one spec"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">{k}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Featured</p>
            <h2 className="mt-3 font-display text-2xl text-ink md:text-3xl">
              50×60×16 in Bethpage
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Two 12×60 wood-post porches, open center bay, charcoal roof, crushed-stone
              yard. Posted September 1, 2026 — a shop that works like a barn and
              greets like a house.
            </p>
            <Button asChild className="mt-6">
              <Link to="/projects">
                See the work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl lg:col-span-7">
            <img
              src="/buildings/hero-bethpage.jpg"
              alt="50 by 60 by 16 metal barn with dual porches in Bethpage — Barn Central"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">What we build</p>
              <h2 className="mt-3 font-display text-2xl text-ink md:text-3xl">Five kinds of useful.</h2>
            </div>
            <Link to="/services" className="hidden text-sm font-medium text-barn hover:underline sm:inline">
              All services
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  to="/services"
                  hash={s.id}
                  className="group block overflow-hidden rounded-lg bg-paper shadow-[var(--shadow-border)]"
                >
                  <span className="block aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt=""
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="block p-4">
                    <span className="block font-display text-lg text-ink">{s.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{s.blurb}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">From the yard</p>
        <h2 className="mt-3 font-display text-2xl text-ink md:text-3xl">Recent work</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          Photos from Barn Central jobs — the same ones on Facebook.
        </p>
        <div className="mt-8">
          <ProjectGrid limit={6} showFilters={false} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to="/projects">Open the full gallery</Link>
          </Button>
          <Button asChild variant="ghost">
            <a href={site.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-plank">How a job runs</p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl">Pad first. Steel second. Porch last.</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.n} className="border-t border-white/15 pt-4">
                <p className="font-display text-2xl text-plank">{step.n}</p>
                <h3 className="mt-2 font-display text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/buildings/fb-porch-right.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <h2 className="font-display text-3xl text-cream md:text-4xl">
            Tell us the size. We’ll price the building.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/75">
            Use the quote tool to set width, length, eave, and porches. No account.
            A real conversation after.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="invert">
              <Link to="/quote">Open the quote tool</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream/30 text-cream hover:bg-cream/10">
              <a href={site.phoneHref}>{site.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
