// /api/films.js
// Vercel Serverless Function (Node.js)

const LIST_URL = "https://letterboxd.com/nashdashin/list/my-all-time-favorite-films/";

// tiny HTML entity decode (enough for titles)
function decodeEntities(str = "") {
  return str
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&nbsp;", " ");
}

function parseTitleYear(full = "") {
  const m = full.match(/^(.*)\s\((\d{4})\)\s*$/);
  if (!m) return { title: full.trim(), year: null };
  return { title: m[1].trim(), year: Number(m[2]) };
}

export default async function handler(req, res) {
  try {
    const r = await fetch(LIST_URL, {
      method: "GET",
      headers: {
        // Letterboxd will often 403 "botty" requests; this helps a lot
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "Accept":
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://letterboxd.com/",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
      },
    });

    if (!r.ok) {
      // Return a useful error for your UI
      const text = await r.text().catch(() => "");
      return res.status(r.status).json({
        error: `Failed to fetch Letterboxd list (${r.status})`,
        details: text.slice(0, 200),
      });
    }

    const html = await r.text();

    // Titles appear in the source as: data-item-full-display-name="The Dark Knight (2008)"
    const names = [...html.matchAll(/data-item-full-display-name="([^"]+)"/g)]
      .map((m) => decodeEntities(m[1]).trim())
      .filter(Boolean);

    // Optional: slugs often appear as data-film-slug="the-dark-knight"
    const slugs = [...html.matchAll(/data-film-slug="([^"]+)"/g)]
      .map((m) => m[1].trim())
      .filter(Boolean);

    // Make unique, keep order
    const seen = new Set();
    const uniqueNames = [];
    for (const n of names) {
      if (!seen.has(n)) {
        seen.add(n);
        uniqueNames.push(n);
      }
    }

    const films = uniqueNames.map((full, i) => {
      const { title, year } = parseTitleYear(full);
      const slug = slugs[i] || null;

      return {
        title,
        year,
        // If we have a slug, link directly to the film; otherwise omit
        url: slug ? `https://letterboxd.com/film/${slug}/` : LIST_URL,
        poster: null, // keep null for now (your UI already handles this)
      };
    });

    // Cache a bit so you don't hammer Letterboxd
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    return res.status(200).json({ films });
  } catch (e) {
    return res.status(500).json({
      error: "Server error while loading films",
      details: String(e?.message || e),
    });
  }
}
