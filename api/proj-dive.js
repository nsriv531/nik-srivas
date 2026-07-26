import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const code = String(req.query.code || '');
  let map = {};
  try { map = JSON.parse(process.env.PROJ_DIVE_MAP || '{}'); } catch {}
  const slug = map[code];
  if (!/^\d{5}$/.test(code) || !slug || !/^[a-z0-9-]+$/.test(slug)) {
    res.status(404).send('Not found');
    return;
  }
  try {
    const html = await readFile(
      path.join(process.cwd(), 'private', 'dives', `${slug}.html`), 'utf8');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
    res.setHeader('Cache-Control', 'private, no-store');
    res.status(200).send(html);
  } catch {
    res.status(404).send('Not found');
  }
}
