import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon } from "@/components/facebook-icon";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="plank-rule" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo invert />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            {site.tagline} {site.pitch} Barns and storage, garages and shops, barndos
            and homes.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-plank">Visit</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-cream/80 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-cream/80 hover:text-cream">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/quote" className="text-cream/80 hover:text-cream">
                Get a quote
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-plank">Talk to us</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 text-cream hover:text-clay">
                <Phone className="size-4" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="inline-flex items-center gap-2 text-cream/80 hover:text-cream">
                <Mail className="size-4" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Barn Central on Facebook"
                className="inline-flex items-center gap-2 text-cream/80 hover:text-cream"
              >
                <FacebookIcon className="size-4" />
                Facebook
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-cream/50">
            Serving Sumner, Wilson, Davidson, and surrounding Middle Tennessee counties.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-cream/45">
        © {new Date().getFullYear()} Barn Central. {site.region}.
      </div>
    </footer>
  );
}
