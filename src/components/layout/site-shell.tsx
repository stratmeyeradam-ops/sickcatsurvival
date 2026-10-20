import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Siren } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { Logo } from "@/components/brand/logo";
import { DisclaimerBlock } from "@/components/layout/disclaimer";
import { Button } from "@/components/ui/button";
import { DBA_LINE, POISON_LINE } from "@/lib/tiers";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/emergency", label: "Emergency" },
  { to: "/symptoms", label: "Symptoms" },
  { to: "/wellness", label: "Wellness" },
  { to: "/community", label: "Board" },
  { to: "/resources", label: "Tools" },
  { to: "/shop", label: "Shop" },
  { to: "/pricing", label: "Plans" },
] as const;

function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="h-8 w-28 animate-pulse rounded-full bg-ink/10" />;
  }
  if (user) {
    return (
      <div className="flex items-center gap-3">
        <Link to="/account" className="hidden text-sm text-muted hover:text-ink sm:inline">
          Account
        </Link>
        <UserButton />
      </div>
    );
  }
  return (
    <Link to="/login">
      <Button variant="outline" size="sm">
        Sign in
      </Button>
    </Link>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="paper-grain min-h-dvh text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <Logo compact />
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm min-h-11 inline-flex items-center",
                  pathname === item.to || pathname.startsWith(item.to + "/")
                    ? "bg-surface-2 text-ink"
                    : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            <Link to="/emergency" className="inline-flex">
              <Button variant="alert" size="sm" className="gap-1.5">
                <Siren className="size-4" />
                <span className="hidden sm:inline">Emergency now</span>
                <span className="sm:hidden">ER</span>
              </Button>
            </Link>
            <div className="hidden sm:block">
              <AuthSlot />
            </div>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-line bg-paper px-4 py-3 lg:hidden">
            <div className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="min-h-11 py-2 text-base"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/manuals" className="min-h-11 py-2" onClick={() => setOpen(false)}>
                Care manuals
              </Link>
              <Link to="/account" className="min-h-11 py-2" onClick={() => setOpen(false)}>
                Account
              </Link>
              <div className="py-2 sm:hidden">
                <AuthSlot />
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <Logo />
            <DisclaimerBlock className="mt-4" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Desk</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/emergency">Emergency protocols</Link>
              </li>
              <li>
                <Link to="/symptoms">Symptom evaluator</Link>
              </li>
              <li>
                <Link to="/wellness">Wellness notes</Link>
              </li>
              <li>
                <Link to="/manuals">Care manuals</Link>
              </li>
              <li>
                <Link to="/community">Message board</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/pricing">Membership plans</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/legal">Disclaimer, terms, privacy</Link>
              </li>
              <li>
                <Link to="/archives">Archives</Link>
              </li>
              <li>
                <Link to="/toolkit">Health toolkit</Link>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted">{POISON_LINE}</p>
            <p className="mt-3 text-xs text-muted">{DBA_LINE}</p>
          </div>
        </div>
        <SignedIn>
          <p className="sr-only">Signed in</p>
        </SignedIn>
        <SignedOut>
          <p className="sr-only">Signed out</p>
        </SignedOut>
      </footer>
    </div>
  );
}
