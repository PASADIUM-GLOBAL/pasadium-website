# PASADIUM GLOBAL — GitHub Pages deployment

This project is configured to work at both:

- `https://pasadium-global.github.io/pasadium-website/`
- `https://pasadium.tech/` (when the repository's GitHub Pages custom domain is configured)

## Deploy

1. Push the project to the `main` branch.
2. In GitHub: **Settings → Pages → Source → GitHub Actions**.
3. Wait for **Actions → Deploy PASADIUM GLOBAL to GitHub Pages** to finish.
4. For the custom domain, set `pasadium.tech` under **Settings → Pages → Custom domain**. The repository already contains `public/CNAME`.

## Why `base: './'`?

The repository can be served from the project subpath `/pasadium-website/` as well as from the custom domain root. Relative Vite asset URLs avoid the common blank-page failure where `/assets/...` is requested from the wrong host/path.

## Important

GitHub Pages is static hosting. The Express server in `server.ts` is not executed by GitHub Pages. Any `/api/*` functionality must use a separately deployed backend.
