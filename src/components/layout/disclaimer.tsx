import { DISCLAIMER, DBA_LINE } from "@/lib/tiers";

export function DisclaimerBar() {
  return (
    <div className="border-b border-line bg-surface-2">
      <p className="mx-auto max-w-6xl px-4 py-2 text-center text-xs leading-relaxed text-muted sm:px-6">
        {DISCLAIMER}
      </p>
    </div>
  );
}

export function DisclaimerBlock({ className }: { className?: string }) {
  return (
    <aside className={className}>
      <p className="text-sm leading-relaxed text-muted">{DISCLAIMER}</p>
      <p className="mt-2 text-xs text-muted">{DBA_LINE}</p>
    </aside>
  );
}
