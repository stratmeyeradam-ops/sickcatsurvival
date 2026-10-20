import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, LockNote } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addHealthLog, exportHealthLogs, listHealthLogs, type HealthLog } from "@/lib/server/health";
import { ledgerCsv } from "@/lib/ledger-export.mjs";
import { getOptionalTier } from "@/lib/server/billing";

export const Route = createFileRoute("/toolkit")({ component: ToolkitPage });

function ToolkitPage() {
  const [tier, setTier] = useState(0);
  const [logs, setLogs] = useState<HealthLog[]>([]);
  const [catName, setCatName] = useState("My cat");
  const [kind, setKind] = useState<"weight" | "med" | "symptom" | "appetite" | "water">("weight");
  const [value, setValue] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void getOptionalTier().then((r) => setTier(r.tier)).catch(e=>setError(e.message));
  }, []);

  useEffect(() => {
    if (tier < 3) return;
    void listHealthLogs()
      .then(setLogs)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "Could not load"));
  }, [tier]);

  const download = async () => {
    try {
      const rows = await exportHealthLogs();
      const blob = new Blob([ledgerCsv(rows)], {type:"text/csv;charset=utf-8"});
      const url=URL.createObjectURL(blob),a=document.createElement("a");
      a.href=url;a.download="sick-cat-survival-ledger.csv";a.click();
      setTimeout(()=>URL.revokeObjectURL(url),1000);
    } catch(e) {setError(e instanceof Error?e.message:"Could not export your records");}
  };

  return (
    <div>
      <PageHero
        kicker="Archive toolkit"
        title="Health-tracking ledger"
        lede="Weight, medicines, appetite, water. Download a CSV for the clinic. This is a notebook, not a monitor."
        image="/products/notebook.jpg"
        imageAlt="Clothbound health ledger"
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <a href="/resources" className="text-sage underline">Print a clinic visit packet or care handoff sheet</a>
        {error ? <p role="alert" className="mt-4 text-alert">{error}</p> : null}
        {tier < 3 ? (
          <LockNote need="Archive ($10/mo with Stripe)" />
        ) : (
          <>
            <form
              className="space-y-3 rounded-xl bg-surface p-5 shadow-plate"
              onSubmit={(e) => {
                e.preventDefault();
                setError(null);
                void addHealthLog({ data: { catName, kind, value, note } })
                  .then(() => listHealthLogs())
                  .then((rows) => {
                    setLogs(rows);
                    setValue("");
                    setNote("");
                  })
                  .catch((err: unknown) => setError(err instanceof Error ? err.message : "Could not save"));
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <Input value={catName} onChange={(e) => setCatName(e.target.value)} aria-label="Cat name" placeholder="Cat name" required maxLength={40} />
                <select
                  className="h-11 rounded-md bg-paper px-3 shadow-plate"
                  aria-label="Record type"
                  value={kind}
                  onChange={(e) => setKind(e.target.value as typeof kind)}
                >
                  <option value="weight">Weight</option>
                  <option value="med">Medicine</option>
                  <option value="appetite">Appetite</option>
                  <option value="water">Water</option>
                  <option value="symptom">Symptom note</option>
                </select>
              </div>
              <Input value={value} onChange={(e) => setValue(e.target.value)} aria-label="Observation" placeholder="Value (e.g. 4.2 kg)" required maxLength={80} />
              <Input value={note} onChange={(e) => setNote(e.target.value)} aria-label="Note" placeholder="Optional note" maxLength={240} />
              {error ? <p className="text-sm text-alert">{error}</p> : null}
              <div className="flex gap-2">
                <Button type="submit">Log</Button>
                <Button type="button" variant="outline" onClick={()=>void download()}>
                  Download CSV
                </Button>
              </div>
            </form>
            <h2 className="mt-8 font-display text-2xl">Recent observations</h2>
            <p className="mt-2 text-sm text-muted">Your latest 80 records appear below. CSV export includes up to 10,000 records.</p>
            {logs.length===0?<p className="mt-5 text-muted">Start with one observation. Your records stay on your account.</p>:null}
            <ul className="mt-6 space-y-2">
              {logs.map((l) => (
                <li key={l.id} className="rounded-lg bg-surface px-4 py-3 text-sm shadow-plate">
                  <span className="font-medium">{l.kind}</span> · {l.value} · {l.cat_name}
                  {l.note ? <span className="text-muted"> — {l.note}</span> : null}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
