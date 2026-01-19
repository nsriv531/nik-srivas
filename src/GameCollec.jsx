import { useEffect, useMemo, useState } from "react";

export default function GameCollec() {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return games;
    return games.filter((g) => g.toLowerCase().includes(q));
  }, [games, query]);

  return (
    <div className="bg-white/80 rounded-2xl p-6 shadow">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-bold text-gray-800">
          Game Collection ({filtered.length})
        </h3>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your games..."
          className="w-72 max-w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {loading && <p className="mt-4 text-gray-600">Loading games…</p>}

      {error && (
        <p className="mt-4 text-red-600">
          {error}
        </p>
      )}

      {!loading && !error && (
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          {filtered.map((name) => (
            <li
              key={name}
              className="px-4 py-2 rounded-xl bg-white border border-gray-200"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
