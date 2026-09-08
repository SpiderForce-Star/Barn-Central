import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { optionHub, site } from "@/lib/site";

export const Route = createFileRoute("/options")({ component: OptionsPage });

function OptionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Options</p>
      <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">The pieces on the shell.</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        We design to your needs and wants. These are the pieces that sit on the shell.
      </p>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {optionHub.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="group flex h-full flex-col rounded-xl bg-cream p-6 shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]"
            >
              <h2 className="font-display text-2xl text-ink group-hover:text-barn">{item.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.blurb}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-barn">
                Open
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted">{site.pitch}</p>
      <Button asChild className="mt-6">
        <Link to="/quote">Get a quote</Link>
      </Button>
    </main>
  );
}
