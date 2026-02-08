# Portfolio

Single-page site for backend engineering portfolio. Static HTML/CSS/JS.

**Live:** [ghoreishi.dev](https://ghoreishi.dev)

---

## Tech Stack

- HTML5
- CSS3 (grid, flexbox)
- Vanilla JavaScript
- Nginx
- GitHub Actions
- AWS EC2

---

## Local Development

```bash
git clone https://github.com/erfanghoreishi/portfolio.git
cd portfolio
open index.html
```

No build step. Edit files directly.

---

## Deployment

Auto-deploys to EC2 on push to `main` via GitHub Actions.

**Workflow** (`.github/workflows/deploy.yml`):
1. Clone/pull latest changes to `/home/ubuntu/portfolio`
2. Sync files to `/var/www/ghoreishi.dev` (excludes `.git`, `.github`)
3. Reload Nginx

**Required secrets** (GitHub → Settings → Secrets):
- `EC2_HOST` — server IP
- `EC2_USER` — SSH user (e.g., `ubuntu`)
- `EC2_SSH_KEY` — private key

**Server setup:**
```bash
# Nginx serves from /var/www/ghoreishi.dev
# SSL via Certbot (Let's Encrypt)
```

---

## File Structure

```
portfolio/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/resume.pdf
└── .github/workflows/deploy.yml
```

---

## License

MIT © 2026 Erfan Ghoreishi
