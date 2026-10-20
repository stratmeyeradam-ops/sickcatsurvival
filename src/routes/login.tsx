import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in · Sick Cat Survival" },
      { name: "description", content: "Sign in to your membership and care records." },
    ],
  }),
  component: Login,
});

function Login() {
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const nextParam = new URLSearchParams(searchStr).get("next") || "/account";
  const callbackURL = nextParam.startsWith("/") && !nextParam.startsWith("//") && !nextParam.includes("\\") ? nextParam : "/account";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"in" | "up">("in");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      if (mode === "up") {
        const { error: err } = await authClient.signUp.email({
          email,
          password,
          name: name || email.split("@")[0] || "Owner",
          callbackURL,
        });
        if (err) throw new Error(err.message);
      } else {
        const { error: err } = await authClient.signIn.email({
          email,
          password,
          callbackURL,
        });
        if (err) throw new Error(err.message);
      }
      window.location.href = callbackURL;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign-in failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto grid min-h-[70vh] max-w-md place-items-center px-4 py-16">
      <div className="w-full bg-surface p-6 shadow-[var(--shadow-border)]">
        <h1 className="font-display text-3xl font-medium tracking-tight">
          {mode === "in" ? "Sign in" : "Create an account"}
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          Your membership, care records and purchases stay on your account.
        </p>
            <form className="grid gap-3" onSubmit={(e) => void onSubmit(e)}>
              {mode === "up" ? (
                <label className="grid gap-1 text-sm">
                  Name
                  <Input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                </label>
              ) : null}
              <label className="grid gap-1 text-sm">
                Email
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </label>
              <label className="grid gap-1 text-sm">
                Password
                <Input
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete={mode === "up" ? "new-password" : "current-password"}
                />
              </label>
              {error ? <p className="text-sm text-danger">{error}</p> : null}
              <Button type="submit" disabled={busy}>
                {busy ? "Please wait…" : mode === "in" ? "Sign in with email" : "Create account"}
              </Button>
            </form>
            <button
              type="button"
              className="mt-4 text-sm text-ink-soft underline"
              onClick={() => setMode(mode === "in" ? "up" : "in")}
            >
              {mode === "in" ? "Need an account? Create one" : "Already have an account? Sign in"}
            </button>
        <p className="mt-6 text-xs text-muted">
          By continuing you agree to the{" "}
          <Link to="/legal" className="underline">
            terms
          </Link>{" "}
          and{" "}
          <Link to="/legal" className="underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
