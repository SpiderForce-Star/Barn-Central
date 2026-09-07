import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-paper text-ink">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-paper/95 p-2 backdrop-blur-md sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-barn text-sm font-medium text-cream"
          >
            <Phone className="size-4" />
            Call
          </a>
          <Link
            to="/quote"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border text-sm font-medium text-ink"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </div>
  );
}
