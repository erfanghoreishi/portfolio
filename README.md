# Portfolio — Erfan Ghoreishi

Single-page portfolio website built with pure HTML5, CSS3 and vanilla JavaScript. Designed for a clean, corporate-professional aesthetic suitable for UK financial-sector graduate applications.

**Live:** [ghoreishi.dev](https://ghoreishi.dev) *(after deployment)*

---

## Quick Start

```bash
# Clone
git clone https://github.com/erfanghoreishi/portfolio.git
cd portfolio

# Open in browser
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

No build step required — it's pure HTML/CSS/JS.

---

## Customise Content

Replace the placeholder tags in `index.html`:

| Placeholder | Replace with |
|---|---|
| `[YOUR_EMAIL]` | Your email address |
| `[YOUR_DEGREE]` | e.g. *BSc Computer Science* |
| `[YOUR_UNIVERSITY]` | e.g. *University of London* |
| `[YOUR_GRAD_YEAR]` | e.g. *2025* |

Also drop your CV PDF into `assets/resume.pdf`.

---

## File Structure

```
portfolio/
├── index.html          # Main HTML file (all sections)
├── css/
│   └── styles.css      # All styles (mobile-first responsive)
├── js/
│   └── main.js         # Smooth scroll, mobile menu, active nav
├── assets/
│   └── resume.pdf      # Your CV (replace with yours)
└── README.md
```

---

## Deploy to Firebase Hosting

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

### 2. Initialise Firebase in the project

```bash
firebase init hosting
```

When prompted:
- **Public directory:** `.` (current directory — the HTML is at root)
- **Configure as single-page app?** No
- **Overwrite index.html?** No

### 3. Deploy

```bash
firebase deploy
```

Your site will be live at `https://<project-id>.web.app`.

### 4. Connect custom domain (`ghoreishi.dev`)

1. Go to [Firebase Console → Hosting](https://console.firebase.google.com/)
2. Click **Add custom domain**
3. Enter `ghoreishi.dev`
4. Add the DNS `TXT` and `A` records to your domain registrar
5. Firebase provisions an SSL certificate automatically (may take up to 24 hours)

### 5. Enable HTTPS

Firebase Hosting serves everything over HTTPS by default — no extra steps needed.

### 6. Update content without redeploying the whole project

```bash
# Edit index.html (or CSS/JS), then:
firebase deploy --only hosting
```

---

## Technology

- HTML5 (semantic, accessible)
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (no dependencies)
- Google Fonts (Inter)
- Font Awesome 6 (icons via CDN)

---

## Licence

MIT © 2026 Erfan Ghoreishi
