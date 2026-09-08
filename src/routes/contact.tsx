import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Contact</p>
          <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">Talk to us.</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {site.pitch} This form opens your mail app to {site.email}. No account. No fake inbox.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
        <aside className="rounded-xl bg-cream p-5 lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Reach us</p>
          <ul className="mt-4 space-y-3 text-sm">
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
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Middle Tennessee. Barns and storage, garages and shops, barndos and homes.
          </p>
        </aside>
      </div>
    </main>
  );
}
