// Returns the latest commit for an allowlisted repo, for the proj-dive pages.
// Uses GITHUB_TOKEN (fine-grained PAT, Contents: read-only) from env so private
// repos work without ever exposing the token to the client.
const OWNER = 'nsriv531';
// Allowlist comes from the DIVE_REPOS env var (comma-separated repo names),
// synced from .env via `npm run sync-dives` — no code change per new repo.
const ALLOWED = (process.env.DIVE_REPOS || 'gang-tokyo,square-up')
  .split(',').map((s) => s.trim()).filter(Boolean);

export default async function handler(req, res) {
  const repo = String(req.query.repo || '');
  if (!ALLOWED.includes(repo)) {
    res.status(404).json({ error: 'not found' });
    return;
  }
  const headers = {
    'User-Agent': 'proj-dive',
    Accept: 'application/vnd.github+json',
  };
  const token = (process.env.GITHUB_TOKEN || '').trim();
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const r = await fetch(`https://api.github.com/repos/${OWNER}/${repo}/commits?per_page=1`, { headers });
    if (!r.ok) {
      res.status(502).json({ error: `github ${r.status}` });
      return;
    }
    const [c] = await r.json();
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(200).json({
      repo,
      sha: c.sha.slice(0, 7),
      message: c.commit.message.split('\n')[0],
      author: c.commit.author?.name || '',
      date: c.commit.author?.date || '',
    });
  } catch {
    res.status(502).json({ error: 'github unreachable' });
  }
}
