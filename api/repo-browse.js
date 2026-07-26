// Read-only repo browser for the proj-dive pages: branches, file tree, file contents.
// Same allowlist + token model as repo-latest.js — the token never reaches the client.
const OWNER = 'nsriv531';
const ALLOWED = (process.env.DIVE_REPOS || 'gang-tokyo,square-up')
  .split(',').map((s) => s.trim()).filter(Boolean);
const MAX_FILE = 300 * 1024; // preview cap

async function gh(path, token) {
  const headers = { 'User-Agent': 'proj-dive', Accept: 'application/vnd.github+json' };
  if (token) headers.Authorization = `Bearer ${token}`;
  const r = await fetch(`https://api.github.com${path}`, { headers });
  if (!r.ok) throw new Error(`github ${r.status}`);
  return r.json();
}

export default async function handler(req, res) {
  const repo = String(req.query.repo || '');
  const action = String(req.query.action || '');
  if (!ALLOWED.includes(repo)) {
    res.status(404).json({ error: 'not found' });
    return;
  }
  const token = (process.env.GITHUB_TOKEN || '').trim();
  const ref = String(req.query.ref || 'HEAD');
  if (!/^[\w./-]+$/.test(ref)) {
    res.status(400).json({ error: 'bad ref' });
    return;
  }

  try {
    if (action === 'branches') {
      const [info, branches] = await Promise.all([
        gh(`/repos/${OWNER}/${repo}`, token),
        gh(`/repos/${OWNER}/${repo}/branches?per_page=100`, token),
      ]);
      res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
      res.status(200).json({ default: info.default_branch, branches: branches.map((b) => b.name) });
      return;
    }

    if (action === 'tree') {
      const t = await gh(`/repos/${OWNER}/${repo}/git/trees/${encodeURIComponent(ref)}?recursive=1`, token);
      res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
      res.status(200).json({
        truncated: !!t.truncated,
        tree: t.tree.map((e) => ({ path: e.path, type: e.type, size: e.size })),
      });
      return;
    }

    if (action === 'file') {
      const p = String(req.query.path || '');
      if (!p || p.includes('..')) {
        res.status(400).json({ error: 'bad path' });
        return;
      }
      const urlPath = p.split('/').map(encodeURIComponent).join('/');
      const f = await gh(`/repos/${OWNER}/${repo}/contents/${urlPath}?ref=${encodeURIComponent(ref)}`, token);
      if (Array.isArray(f)) {
        res.status(400).json({ error: 'is a directory' });
        return;
      }
      if ((f.size || 0) > MAX_FILE) {
        res.status(200).json({ path: p, size: f.size, tooBig: true });
        return;
      }
      const text = Buffer.from(f.content || '', 'base64').toString('utf8');
      const binary = text.includes('\u0000');
      res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
      res.status(200).json({ path: p, size: f.size, binary, content: binary ? null : text });
      return;
    }

    res.status(400).json({ error: 'bad action' });
  } catch (e) {
    res.status(502).json({ error: String(e.message || e) });
  }
}
