import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

const COMMENT_GIF = "https://media.tenor.com/yjeq2j32A0gAAAAj/hmm-rotating.gif";
const UNKNOWN_PLATFORM = "Unknown platform";

/**
 * SIMPLE: if comments length > THRESHOLD, show a button that opens the modal.
 * No measuring / no refs.
 */
function CommentPreview({ name, comments, onOpen }) {
  const text = typeof comments === "string" ? comments.trim() : "";
  const THRESHOLD = 140; // tweak as needed

  const isLong = text.length > THRESHOLD;

  return (
    <div className="mt-2">
      <p className="text-sm text-gray-700 line-clamp-3">{text}</p>

      {isLong && (
        <button
          type="button"
          className="mt-2 text-xs underline"
          onClick={(e) => {
            e.stopPropagation(); // don't flip card again
            onOpen({ name, comments: text });
          }}
        >
          Open modal
        </button>
      )}
    </div>
  );
}

export default function GameCollec() {
  const [games, setGames] = useState([]); // [{name,rating,platforms,comments}]
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("az"); // "az" | "za" | "rating_desc"
  const [platformFilter, setPlatformFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openGame, setOpenGame] = useState(null);

  // modal state
  const [modalGame, setModalGame] = useState(null); // { name, comments } | null

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const r = await fetch("/api/vglist-games");
        const data = await r.json();
        if (!r.ok) throw new Error(data?.error || "Failed to load games");

        if (!cancelled) setGames(Array.isArray(data.games) ? data.games : []);
      } catch (e) {
        if (!cancelled) setError(e?.message || "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // close modal with Esc
  useEffect(() => {
    if (!modalGame) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setModalGame(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalGame]);

  // lock background scroll while modal open
  useEffect(() => {
    document.body.style.overflow = modalGame ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalGame]);

  // platform dropdown options
  const platformOptions = useMemo(() => {
    const set = new Set();

    for (const g of games) {
      const pls = Array.isArray(g?.platforms) ? g.platforms : [];
      if (pls.length === 0) {
        set.add(UNKNOWN_PLATFORM);
        continue;
      }
      for (const p of pls) {
        if (typeof p === "string" && p.trim()) set.add(p.trim());
      }
    }

    return Array.from(set).sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );
  }, [games]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pf = platformFilter;

    let list = games;

    // platform filter
    if (pf !== "all") {
      list = list.filter((g) => {
        const pls = Array.isArray(g?.platforms) ? g.platforms : [];
        const normalized = pls.length ? pls : [UNKNOWN_PLATFORM];
        return normalized.some((p) => (p || "").trim() === pf);
      });
    }

    // search
    if (q) {
      list = list.filter((g) => (g?.name || "").toLowerCase().includes(q));
    }

    // sort
    if (sort === "rating_desc") {
      list = [...list].sort((a, b) => {
        const ar = typeof a?.rating === "number" ? a.rating : -1;
        const br = typeof b?.rating === "number" ? b.rating : -1;
        if (br !== ar) return br - ar;

        return (a?.name || "").localeCompare(b?.name || "", undefined, {
          sensitivity: "base",
        });
      });
    } else {
      list = [...list].sort((a, b) =>
        (a?.name || "").localeCompare(b?.name || "", undefined, {
          sensitivity: "base",
        })
      );
      if (sort === "za") list.reverse();
    }

    return list;
  }, [games, query, sort, platformFilter]);

  return (
    <div className="bg-white/80 rounded-2xl p-6 shadow">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h3 className="text-2xl font-bold text-gray-800">
          Game Collection ({filtered.length})
        </h3>

        <div className="flex items-center gap-3 flex-wrap">
          <select
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Filter by platform"
          >
            <option value="all">All platforms</option>
            {platformOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Sort games"
          >
            <option value="az">Title: A → Z</option>
            <option value="za">Title: Z → A</option>
            <option value="rating_desc">Rating: High → Low</option>
          </select>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search through games…"
            className="w-72 max-w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>

      {loading && <p className="mt-4 text-gray-600">Loading games…</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {!loading && !error && (
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          {filtered.map((g) => {
            const commentText =
              typeof g?.comments === "string" ? g.comments.trim() : "";
            const hasComments = commentText.length > 0;

            const isOpen = openGame === g.name;

            const toggle = () => {
              if (!hasComments) return;
              setOpenGame((cur) => (cur === g.name ? null : g.name));
            };

            return (
              <li key={g.name} className="w-full">
                <div
                  className="relative h-[84px] md:h-[84px] [perspective:1200px]"
                  onClick={toggle}
                  role={hasComments ? "button" : undefined}
                  tabIndex={hasComments ? 0 : -1}
                  onKeyDown={(e) => {
                    if (!hasComments) return;
                    if (e.key === "Enter" || e.key === " ") toggle();
                  }}
                >
                  <div
                    className={[
                      "absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d]",
                      isOpen ? "[transform:rotateY(180deg)]" : "",
                      hasComments ? "cursor-pointer" : "cursor-default",
                    ].join(" ")}
                  >
                    {/* FRONT */}
                    <div className="absolute inset-0 [backface-visibility:hidden] px-4 py-2 rounded-xl bg-white border border-gray-200">
                      <div className="flex items-start justify-between gap-3">
                        <div className="font-medium text-gray-900">{g.name}</div>

                        <div className="shrink-0 text-sm font-semibold text-gray-700">
                          {typeof g.rating === "number" ? `${g.rating}` : "—"}
                        </div>
                      </div>

                      <div className="mt-1 text-sm text-gray-600">
                        {Array.isArray(g.platforms) && g.platforms.length > 0
                          ? g.platforms.join(", ")
                          : UNKNOWN_PLATFORM}
                      </div>

                      {hasComments && (
                        <img
                          src={COMMENT_GIF}
                          alt="Has comments"
                          className="absolute bottom-2 right-2 w-4 h-4 opacity-90 pointer-events-none"
                          loading="lazy"
                        />
                      )}
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] px-4 py-2 rounded-xl bg-white border border-gray-200">
                      <div className="flex items-start justify-between gap-3">
                        <div className="font-semibold text-gray-900 truncate">
                          {g.name}
                        </div>
                      </div>

                      {hasComments ? (
                        <CommentPreview
                          name={g.name}
                          comments={commentText}
                          onOpen={(payload) => setModalGame(payload)}
                        />
                      ) : (
                        <p className="mt-2 text-sm text-gray-500 italic">
                          No comments
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* SIMPLE MODAL (Portal) */}
      {modalGame &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setModalGame(null)}
          >
            <div className="bg-white p-4 rounded border max-w-lg w-full">
              <div className="flex items-center justify-between gap-3">
                <div className="font-bold">{modalGame.name}</div>
                <button
                  className="border px-2 py-1 rounded"
                  onClick={() => setModalGame(null)}
                >
                  Close
                </button>
              </div>

              <div className="mt-3 whitespace-pre-wrap text-sm">
                {modalGame.comments}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
