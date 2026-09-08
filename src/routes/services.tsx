import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { processSteps, services, site } from "@/lib/site";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <main className="pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Services</p>
        <h1 className="mt-3 max-w-2xl font-display text-3xl text-ink md:text-4xl">
          We design to your needs and wants.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {site.pitch} Three kinds of building. Same steel, same pad, same conversation about what
          you actually need the structure to do.
        </p>
      </div>

      <div className="mt-14 space-y-16">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <div className="relative min-h-[52vh] overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 size-full object-cover"
                style={{ objectPosition: s.objectPosition }}
              />
              <div className="absolute inset-0 bg-ink/45" />
              <div className="relative mx-auto flex min-h-[52vh] max-w-6xl items-end px-4 py-10 sm:px-6">
                <p className="font-display text-3xl text-cream md:text-4xl">{s.title}</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted">{s.blurb}</p>
              </div>
              <div className="lg:col-span-6">
                <ul className="space-y-2 text-sm text-ink/80">
                  {s.bullets.map((line) => (
                    <li key={line} className="border-l-2 border-wood pl-3">
                      {line}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6">
                  <Link to="/quote" search={{ type: s.id === "barns" ? "barn" : s.id === "shops" ? "shop" : "barndo" }}>
                    Quote this type
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
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
        <Button asChild className="mt-10">
          <Link to="/quote">Start with a size</Link>
        </Button>
      </section>
    </main>
  );
}
