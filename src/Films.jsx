import { useState } from "react";

export default function Films() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadFilms() {
    try {
      setLoading(true);
      setError("");

      const r = await fetch("/api/films");
      const data = await r.json();

      if (!r.ok) throw new Error(data?.error || "Failed to load films");
      setFilms(Array.isArray(data.films) ? data.films : []);
    } catch (e) {
      setError(e?.message || "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white/80 rounded-2xl p-6 shadow">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h3 className="text-2xl font-bold text-gray-800">
          Favorite Films ({films.length})
        </h3>

        <div className="flex items-center gap-3">
          <button
            onClick={loadFilms}
            className="px-4 py-2 rounded-lg bg-black text-white"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load films"}
          </button>

          <a
            className="text-sm underline text-blue-600"
            href="https://letterboxd.com/nashdashin/list/my-all-time-favorite-films/"
            target="_blank"
            rel="noreferrer"
          >
            View on Letterboxd
          </a>
        </div>
      </div>

      {error && <p className="mt-4 text-red-600">{error}</p>}

      {!error && films.length > 0 && (
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {films.map((f) => (
            <li
              key={`${f.title}-${f.year ?? "na"}`}
              className="rounded-xl bg-white border border-gray-200 p-3"
            >
              <div className="font-semibold text-gray-900">
                {f.title}{" "}
                {f.year ? <span className="text-gray-500">({f.year})</span> : null}
              </div>

              <a
                href={f.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline text-blue-600"
              >
                Open
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
