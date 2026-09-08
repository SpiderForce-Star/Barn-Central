import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FacebookIcon } from "@/components/facebook-icon";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const darkHero = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !darkHero || scrolled || open;
  const invert = darkHero && !solid;
  const muted = invert ? "text-cream/85 hover:text-cream" : "text-ink/75 hover:text-ink";
  const strong = invert ? "text-cream" : "text-barn";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-200",
        solid
          ? "bg-paper/95 text-ink shadow-[var(--shadow-border)] backdrop-blur-md"
          : "bg-transparent text-cream",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6">
        <Link to="/" aria-label="Barn Central home" className="shrink-0">
          <Logo invert={invert} />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "rounded-md px-2.5 py-2 text-sm font-medium tracking-wide transition-colors",
                muted,
                pathname === item.href && (invert ? "text-cream" : "text-barn"),
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-1.5">
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Barn Central on Facebook"
            className={cn("inline-flex size-10 items-center justify-center rounded-md", strong)}
          >
            <FacebookIcon className="size-5" />
          </a>
          <a
            href={site.phoneHref}
            className={cn(
              "hidden items-center gap-1.5 rounded-md px-2 py-2 text-sm font-medium md:inline-flex",
              strong,
            )}
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
          <Link
            to="/contact"
            className={cn(
              "hidden items-center rounded-md px-2 py-2 text-sm font-medium md:inline-flex",
              muted,
              pathname === "/contact" && (invert ? "text-cream" : "text-barn"),
            )}
          >
            Contact
          </Link>
          <Button asChild size="sm" variant={invert ? "invert" : "default"} className="hidden sm:inline-flex">
            <Link to="/quote">Get a quote</Link>
          </Button>
          <button
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-md lg:hidden",
              invert ? "bg-ink/35 text-cream" : "text-ink",
            )}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-paper px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-cream"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-cream">
              Contact
            </Link>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Barn Central on Facebook"
              className="inline-flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-cream"
            >
              <FacebookIcon className="size-5" />
              Facebook
            </a>
            <a
              href={site.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-barn px-3 py-3 text-sm font-medium text-cream"
            >
              <Phone className="size-4" />
              Call {site.phone}
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center rounded-md border border-border px-3 py-3 text-sm font-medium text-ink"
            >
              Get a quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
