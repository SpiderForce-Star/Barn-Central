import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote-form";
import { site } from "@/lib/site";

export const Route = createFileRoute("/quote")({ component: QuotePage });

function QuotePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Quote</p>
      <h1 className="mt-3 max-w-2xl font-display text-3xl text-ink md:text-4xl">
        Set the size. Send the spec.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {site.pitch} Pick barn / storage, garage / shop, or barndo / home. Then
        your name and phone. We price the building — this is not a cart. {site.phone}
      </p>
      <div className="mt-8">
        <QuoteForm />
      </div>
    </main>
  );
}
