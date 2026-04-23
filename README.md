
Action: file_editor create /app/portfolio/README.md --file-text "# Nishant Raj — Portfolio

A modern, editorial-style portfolio for **Nishant Raj** — Graphic Designer & CSE Student.
Built with plain **HTML / CSS / JavaScript** (no frameworks, no build step).

---

## 📁 Folder structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ... project25.jpg
├── assets/
│   └── nishant-raj-resume.pdf   ← your real resume goes here
└── README.md
```

---

## 🖼 How to add your 25 design images (step‑by‑step)

1. Open the `images/` folder.
2. Rename your first design to **`project1.jpg`**. (You can also use `.png` or `.webp`.)
3. Do the same for the rest: `project2.jpg`, `project3.jpg`, … up to `project25.jpg`.
4. Open `index.html` and find the gallery section (it starts with the comment
   `<!-- PORTFOLIO GALLERY — 25+ images -->`).
5. Each project uses this pattern:

   ```html
   <figure class=\"card\" data-cat=\"branding\">
     <img loading=\"lazy\"
          src=\"https://images.unsplash.com/...\"
          alt=\"Brand identity mockup\"
          data-title=\"Solstice Identity\"
          data-desc=\"Logo, palette & stationery for a wellness studio.\" />
     <!-- Replace with your own design: images/project1.jpg -->
     <figcaption><span>Solstice Identity</span><em>Branding</em></figcaption>
   </figure>
   ```

6. To replace a placeholder:
   - Change `src=\"…unsplash…\"` → **`src=\"images/project1.jpg\"`**
   - Update `alt=\"…\"` with a short description
   - Update `data-title=\"…\"` (shown in the lightbox title)
   - Update `data-desc=\"…\"` (shown in the lightbox description)
   - Update the `<figcaption>` text (shown on hover)
   - Keep `data-cat` as one of: `branding` · `posters` · `social` · `ui`

7. To add **more** than 25 images: copy any `<figure>…</figure>` block and paste it inside
   `<div class=\"gallery\" id=\"gallery\">`. The filter counts update automatically.

---

## 📄 How to add your Resume PDF

1. Export your resume as PDF.
2. Rename it to **`nishant-raj-resume.pdf`**.
3. Drop it inside the `assets/` folder.
4. Done — the \"Download Resume (PDF)\" button will serve it automatically.

---

## 💻 How to run it locally

**Option A — Just double‑click**
Open `index.html` in your browser. That's it. Everything works.

**Option B — Local server (recommended, lets lazy‑loading work smoothly)**

If you have Python 3 installed:

```bash
cd portfolio
python3 -m http.server 8080
```

Then open **http://localhost:8080** in your browser.

If you use VS Code, install the **\"Live Server\"** extension → right‑click `index.html` →
*\"Open with Live Server\"*.

---

## 🚀 Deploy with GitHub Pages (free)

1. **Create a GitHub repo** — e.g. `nishant-portfolio`.
2. **Push this folder** to the repo:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m \"Portfolio v1\"
   git branch -M main
   git remote add origin https://github.com/Inviticus03/nishant-portfolio.git
   git push -u origin main
   ```
3. On GitHub, open the repo → **Settings** → **Pages**.
4. Under **Source**, choose:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**. GitHub will give you a live URL like:
   `https://inviticus03.github.io/nishant-portfolio/`
6. Wait ~1 minute, then visit it. 🎉

To update the site, just `git push` new changes — GitHub Pages rebuilds automatically.

---

## ✏️ Where to edit text content

Inside `index.html`, you'll find comments like:

- `<!-- Replace with your own design: images/project1.jpg -->`
- Name, email, phone, LinkedIn, GitHub are in the **Contact** and **Footer** sections.
- Education details are in the **Resume** section.

All CSS colors live at the top of `css/style.css` under `:root { … }` — change `--accent`
to recolor the whole site.

---

Built with care. ✦
"
Observation: Create successful: /app/portfolio/README.md