import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="30" rx="8" fill="#2A5348" />
      <path d="M7 14 L10 6 L14 13" fill="#F4EFE6" />
      <path d="M25 14 L22 6 L18 13" fill="#F4EFE6" />
      <circle cx="16" cy="18" r="8.2" fill="#F4EFE6" />
      <circle cx="13.2" cy="16.6" r="1.15" fill="#2A5348" />
      <circle cx="18.8" cy="16.6" r="1.15" fill="#2A5348" />
      <rect x="14.7" y="19.2" width="2.6" height="6.2" rx="0.4" fill="#2A5348" />
      <rect x="12.2" y="21.1" width="7.6" height="2.4" rx="0.4" fill="#2A5348" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex min-h-11 items-center gap-2.5 text-ink">
      <Mark />
      <span className="leading-tight">
        <span className="block font-display text-base tracking-tight">Sick Cat Survival</span>
        {!compact ? (
          <span className="hidden text-[11px] uppercase tracking-[0.16em] text-muted sm:block">
            Field desk for feline crises
          </span>
        ) : null}
      </span>
    </Link>
  );
}
