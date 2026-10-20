import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { listBoard, postThread, type CategoryRow, type ThreadRow } from "@/lib/server/forum";
import { getOptionalTier } from "@/lib/server/billing";

export const Route = createFileRoute("/community/")({ component: CommunityPage });

function CommunityPage() {
  const [categories, setCategories] = useState<CategoryRow[]>([]);
  const [threads, setThreads] = useState<ThreadRow[]>([]);
  const [tier, setTier] = useState(0);
  const [signedIn, setSignedIn] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    const board = await listBoard();
    setCategories(board.categories);
    setThreads(board.threads);
    if (board.categories[0] && categoryId === null) setCategoryId(board.categories[0].id);
    const me = await getOptionalTier();
    setTier(me.tier);
    setSignedIn(me.signedIn);
  }

  useEffect(() => {
    void load().catch(e=>setError(e instanceof Error?e.message:"Could not load the board"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PageHero
        kicker="Peer board"
        title="Community message board"
        lede="Experiences, logistics, and company. Not diagnoses. Posting and replies require Emergency Desk ($5/mo)."
        image="/images/tuxedo.jpg"
        imageAlt="A tuxedo cat looking toward the camera"
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-3">
          {categories.map((c) => (
            <div key={c.id} className="rounded-xl bg-surface p-4 shadow-plate">
              <h2 className="font-display text-xl">{c.name}</h2>
              <p className="mt-1 text-sm text-muted">{c.description}</p>
              <p className="mt-2 text-xs tabular-nums text-muted">{c.thread_count} threads</p>
            </div>
          ))}
        </aside>
        <div>
          <div className="rounded-xl bg-surface p-5 shadow-plate">
            <h2 className="font-display text-2xl">New thread</h2>
            {tier < 2 ? (
              <p className="mt-2 text-sm text-muted">
                {signedIn ? (
                  <>
                    Upgrade to Emergency Desk to post.{" "}
                    <Link to="/pricing" className="text-sage">
                      Membership plans
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-sage">
                      Sign in
                    </Link>{" "}
                    and subscribe to post. Anyone may read.
                  </>
                )}
              </p>
            ) : (
              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setError(null);
                  if (!categoryId) return;
                  void postThread({ data: { categoryId, title, body } })
                    .then((r) => {
                      setTitle("");
                      setBody("");
                      void load().catch(e=>setError(e instanceof Error?e.message:"Could not load the board"));
                      return r.id;
                    })
                    .catch((err: unknown) => {
                      setError(err instanceof Error ? err.message : "Could not post");
                    });
                }}
              >
                <label className="block text-sm">
                  Room
                  <select
                    className="mt-1 h-11 w-full rounded-md bg-paper px-3 shadow-plate"
                    value={categoryId ?? ""}
                    onChange={(e) => setCategoryId(Number(e.target.value))}
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </label>
                <Input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <Textarea
                  placeholder="What you observed, what the veterinarian said, what you are organizing at home."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                />
                {error ? <p className="text-sm text-alert">{error}</p> : null}
                <Button type="submit">Post</Button>
              </form>
            )}
          </div>
          <div className="mt-6 space-y-3">
            {threads.map((t) => (
              <Link
                key={t.id}
                to="/community/$id"
                params={{ id: String(t.id) }}
                className="block rounded-xl bg-surface p-5 shadow-plate"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {t.category_name}
                  {t.pinned ? " · Pinned" : ""}
                </p>
                <h3 className="mt-2 font-display text-2xl">{t.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{t.body}</p>
                <p className="mt-3 text-xs text-muted">
                  {t.author_name} · {t.reply_count} replies
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
