export default async function handler(req, res) {
  try {
    const userId = 2013;
    const url = `https://vglist.co/game_purchases.json?user_id=${userId}`;

    const r = await fetch(url, {
      headers: { Accept: "application/json", "User-Agent": "Mozilla/5.0" },
    });

    if (!r.ok) {
      return res.status(502).json({ error: `VGList fetch failed: ${r.status}` });
    }

    const purchases = await r.json();

    // If the same game appears multiple times, keep the one that has comments (or latest non-empty)
    const byName = new Map();

    for (const p of purchases) {
      const name = p?.game?.name;
      if (typeof name !== "string" || !name.trim()) continue;

      const cleanName = name.trim();
      const rating = typeof p?.rating === "number" ? p.rating : null;

      const platforms = Array.isArray(p?.platforms)
        ? p.platforms
            .map((pl) => pl?.name)
            .filter((n) => typeof n === "string" && n.trim())
            .map((n) => n.trim())
        : [];

      const comments =
        typeof p?.comments === "string" && p.comments.trim().length > 0
          ? p.comments.trim()
          : "";

      const existing = byName.get(cleanName);

      // Prefer entry with comments; otherwise keep existing
      if (!existing) {
        byName.set(cleanName, { name: cleanName, rating, platforms, comments });
      } else if (!existing.comments && comments) {
        byName.set(cleanName, { ...existing, rating, platforms, comments });
      } else if (existing.comments && comments) {
        // both have comments - keep existing (or swap if you want)
        // no-op
      }
    }

    const games = Array.from(byName.values());

    return res.status(200).json({ userId, count: games.length, games });
  } catch (err) {
    return res.status(500).json({ error: err?.message || "Server error" });
  }
}
