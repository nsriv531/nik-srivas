export default async function handler(req, res) {
  try {
    const userId = 2013;
    const url = `https://vglist.co/game_purchases.json?user_id=${userId}`;

    const r = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!r.ok) {
      return res.status(502).json({ error: `VGList fetch failed: ${r.status}` });
    }

    const purchases = await r.json();

    // Map by game name to de-dupe + merge
    const map = new Map();

    for (const p of Array.isArray(purchases) ? purchases : []) {
      const name = p?.game?.name;
      if (typeof name !== "string" || !name.trim()) continue;

      const cleanName = name.trim();
      const rating =
        typeof p?.rating === "number" ? p.rating : null;

      const platforms = Array.isArray(p?.platforms)
        ? p.platforms
            .map((pl) => pl?.name)
            .filter((n) => typeof n === "string" && n.trim())
            .map((n) => n.trim())
        : [];

      if (!map.has(cleanName)) {
        map.set(cleanName, {
          name: cleanName,
          rating,
          platforms: [...new Set(platforms)],
        });
      } else {
        const existing = map.get(cleanName);

        // keep the highest rating (or the non-null one)
        const existingRating = existing.rating;
        if (typeof rating === "number") {
          if (typeof existingRating !== "number" || rating > existingRating) {
            existing.rating = rating;
          }
        }

        // merge platforms
        existing.platforms = Array.from(
          new Set([...(existing.platforms || []), ...platforms])
        );
      }
    }

    const games = Array.from(map.values());

    return res.status(200).json({ userId, count: games.length, games });
  } catch (err) {
    return res.status(500).json({ error: err?.message || "Server error" });
  }
}
