export default async function handler(req, res) {
  try {
    // you can keep userId fixed, since this is YOUR portfolio
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

    const purchases = await r.json(); // ✅ this is the array you pasted

    const games = Array.from(
      new Set(
        purchases
          .map((p) => p?.game?.name)
          .filter((name) => typeof name === "string" && name.trim().length > 0)
          .map((name) => name.trim())
      )
    );

    return res.status(200).json({ userId, count: games.length, games });
  } catch (err) {
    return res.status(500).json({ error: err?.message || "Server error" });
  }
}
