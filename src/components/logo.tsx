import { cn } from "@/lib/utils";

export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src="/logo.png"
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 rounded-full bg-barn ring-1 ring-black/10"
      />
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-[1.4rem] font-semibold tracking-[0.14em]",
            invert ? "text-cream" : "text-barn",
          )}
        >
          BARN
        </span>
        <span className="mt-0.5 block rounded-sm bg-wood px-1.5 py-0.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-cream">
          Central
        </span>
      </span>
    </span>
  );
}
