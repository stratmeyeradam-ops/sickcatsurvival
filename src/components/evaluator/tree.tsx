import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Anatomy } from "@/components/anatomy/diagrams";
import {
  type EvalResult,
  type SymptomGuide,
  urgencyLabel,
} from "@/lib/data/symptoms";
import { cn } from "@/lib/utils";

function ResultCard({ result }: { result: EvalResult }) {
  const tone =
    result.urgency === "emergency" ? "alert" : result.urgency === "urgent" ? "sage" : "muted";
  return (
    <div className="rounded-xl bg-surface p-5 shadow-plate sm:p-7">
      <Badge tone={tone === "muted" ? "muted" : tone}>{urgencyLabel(result.urgency)}</Badge>
      <h2 className="mt-3 font-display text-2xl">{result.title}</h2>
      <p className="mt-3 text-muted">{result.summary}</p>
      <ol className="mt-5 space-y-2">
        {result.actions.map((a) => (
          <li key={a} className="flex gap-3 text-sm leading-relaxed">
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-sage" />
            <span>{a}</span>
          </li>
        ))}
      </ol>
      {result.avoid.length ? (
        <div className="mt-5 rounded-lg bg-surface-2 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Do not</p>
          <ul className="mt-2 space-y-1 text-sm text-ink">
            {result.avoid.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="mt-5 font-medium">{result.seek}</p>
      {result.urgency === "emergency" ? (
        <Link to="/emergency" className="mt-4 inline-flex">
          <Button variant="alert" size="lg">
            <Phone className="size-4" />
            Open emergency steps
          </Button>
        </Link>
      ) : null}
    </div>
  );
}

export function SymptomTree({ guide }: { guide: SymptomGuide }) {
  const [selected,setSelected]=useState<EvalResult|null>(null);
  const [nodeId, setNodeId] = useState(guide.startId);
  const [stack, setStack] = useState<string[]>([]);
  const node = guide.nodes[nodeId];

  const progress = useMemo(() => {
    return Math.min(90, 18 + stack.length * 22);
  }, [stack.length]);

  return (
    <div>
      <div className="mb-6 h-1 overflow-hidden rounded-full bg-line">
        <div
          className="h-full bg-sage transition-[width] duration-250"
          style={{ width: `${progress}%` }}
        />
      </div>
      {selected ? <div><ResultCard result={selected}/><Button variant="outline" className="mt-4" onClick={()=>setSelected(null)}>Back to questions</Button></div> : node ? (
        <div className="rounded-xl bg-surface p-5 shadow-plate sm:p-7">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Step {stack.length + 1}</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl">{node.question}</h2>
          {node.detail ? <p className="mt-3 text-muted">{node.detail}</p> : null}
          <div className="mt-6 grid gap-3">
            {node.options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                className={cn(
                  "min-h-14 rounded-lg bg-paper px-4 py-3 text-left text-base font-medium shadow-plate",
                  "transition-[transform,background-color] duration-150 hover:bg-surface-2 active:scale-[0.98]",
                )}
                onClick={() => {
                  if(opt.result){setSelected(opt.result);return;}
                  if (opt.next) {
                    setStack((s) => [...s, nodeId]);
                    setNodeId(opt.next);
                  }
                }}
              >
                {opt.label}
                {opt.result ? (
                  <span className="mt-1 block text-sm font-normal text-muted">
                    {urgencyLabel(opt.result.urgency)} — {opt.result.title}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            {stack.length ? (
              <Button
                variant="ghost"
                onClick={() => {
                  const prev = stack[stack.length - 1];
                  setStack((s) => s.slice(0, -1));
                  if (prev) setNodeId(prev);
                }}
              >
                <ArrowLeft className="size-4" />
                Back
              </Button>
            ) : (
              <Link to="/symptoms">
                <Button variant="ghost">All symptoms</Button>
              </Link>
            )}
            <Button
              variant="outline"
              onClick={() => {
                setNodeId(guide.startId);
                setStack([]);
                setSelected(null);
              }}
            >
              Start over
            </Button>
          </div>
        </div>
      ) : (
        <p>This step is missing. Start over.</p>
      )}
      {guide.anatomy ? (
        <div className="mt-6">
          <Anatomy kind={guide.anatomy} />
        </div>
      ) : null}
    </div>
  );
}
