import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { site } from "@/lib/site";

type QuoteSearch = {
  color?: string;
  framing?: string;
  foundation?: string;
  type?: string;
  insulation?: string;
  walkDoors?: string;
  windows?: string;
  cupola?: string;
  ridgeVent?: string;
};

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): QuoteSearch => ({
    color: typeof search.color === "string" ? search.color : undefined,
    framing: typeof search.framing === "string" ? search.framing : undefined,
    foundation: typeof search.foundation === "string" ? search.foundation : undefined,
    type: typeof search.type === "string" ? search.type : undefined,
    insulation: typeof search.insulation === "string" ? search.insulation : undefined,
    walkDoors: typeof search.walkDoors === "string" ? search.walkDoors : undefined,
    windows: typeof search.windows === "string" ? search.windows : undefined,
    cupola: typeof search.cupola === "string" ? search.cupola : undefined,
    ridgeVent: typeof search.ridgeVent === "string" ? search.ridgeVent : undefined,
  }),
  component: QuotePage,
});

function QuotePage() {
  const search = Route.useSearch();
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Quote</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl text-ink md:text-4xl">Request a quote.</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {site.pitch} Name and phone first. Write what you want. Size sliders are optional if the
            description is there. We price the building — this is not a cart.
          </p>
        </div>
        <aside className="rounded-xl bg-cream p-5 lg:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Talk to us</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 font-medium text-barn">
                <Phone className="size-4" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="inline-flex items-center gap-2 text-ink/80 hover:text-ink">
                <Mail className="size-4" />
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Middle Tennessee. We design it. We supply it. We raise it on your site.
          </p>
        </aside>
      </div>
      <div className="mt-8">
        <QuoteForm
          color={search.color}
          framing={search.framing}
          foundation={search.foundation}
          type={search.type}
          insulation={search.insulation}
          walkDoors={search.walkDoors}
          windows={search.windows}
          cupola={search.cupola}
          ridgeVent={search.ridgeVent}
        />
      </div>
    </main>
  );
}
