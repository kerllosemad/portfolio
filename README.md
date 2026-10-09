# Kerllos Emad Zaki Atallah — Portfolio

A single-page portfolio (no build tools needed — plain HTML/CSS/JS).

## Files
- `index.html` — page structure (you shouldn't need to touch this)
- `styles.css` — visual design
- `script.js` — renders everything from data.js (you shouldn't need to touch this)
- `data.js` — **this is the only file you edit** to add projects, skills, experience, services, and contact info

## Adding a new project
Open `data.js`, find the `PROJECTS` array near the top, and add a new object like this:

```js
{
  title: "Coffee Shop Website",
  category: "web",          // "web" or "design"
  year: "2026",
  description: "A responsive website built for a local coffee shop, with an online menu.",
  tags: ["HTML", "CSS", "JavaScript"],
  link: "https://example.com",   // or "" if no live link
  image: ""                       // or "images/coffee-shop.jpg"
}
```

Save the file — the new project appears on the site automatically, under the right filter (Web / Design).

### Adding a real image to a project
1. Create a folder named `images` next to `index.html`.
2. Put your screenshot/design file inside it, e.g. `images/coffee-shop.jpg`.
3. Set `image: "images/coffee-shop.jpg"` on that project in `data.js`.

If you leave `image: ""`, the project card shows a placeholder tile with the project's initials — so you can publish now and add screenshots later.

## Editing your info
Also in `data.js`:
- `PROFILE` — your name, role, bio, email, GitHub, LinkedIn
- `SKILLS` — technical / personal skills lists
- `EXPERIENCE` — work history entries
- `SERVICES` — what you offer freelance clients

Before you publish, replace the placeholder email/GitHub/LinkedIn links in `PROFILE`.

---

## Deploy to GitHub

1. Create a new repository on GitHub (e.g. `portfolio`) — don't initialize it with a README.
2. On your computer, in this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

## Deploy to Vercel

1. Go to https://vercel.com and sign in with your GitHub account.
2. Click **Add New → Project**.
3. Select the `portfolio` repository you just pushed.
4. Framework preset: choose **Other** (it's a static site, no build step needed).
5. Leave Build Command and Output Directory empty, click **Deploy**.

Vercel will give you a live URL (e.g. `portfolio-yourname.vercel.app`). Every time you `git push` a change (like a new project in `data.js`), Vercel redeploys automatically.

## Updating the live site later
Whenever you finish new work:
1. Add the entry to `data.js` (see above).
2. `git add . && git commit -m "Add [project name]" && git push`
3. Vercel updates the live site automatically within a minute or two.
