import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "ink",
  className,
}: {
  children: React.ReactNode;
  tone?: "ink" | "sage" | "alert" | "muted";
  className?: string;
}) {
  const tones = {
    ink: "bg-ink text-paper",
    sage: "bg-sage text-sage-fg",
    alert: "bg-alert text-alert-fg",
    muted: "bg-surface-2 text-muted",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
