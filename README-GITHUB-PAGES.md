# PASADIUM GLOBAL — GitHub Pages deployment

This repository is configured for a Vite/React static deployment at:

https://pasadium.tech/

## GitHub setup

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` or manually run **Deploy PASADIUM GLOBAL to GitHub Pages** from Actions.
5. Under Pages → Custom domain, configure `pasadium.tech` if it is not already configured.
6. Ensure the DNS records for `pasadium.tech` point to GitHub Pages.

The workflow builds `dist/` with Vite and deploys only the static artifact. The included `public/CNAME` preserves the custom domain in the artifact.

## Important

GitHub Pages is static hosting. The Express server in `server.ts` is not executed by GitHub Pages. The public AI assistant currently calls `/api/ai/query`; if no API service is deployed at that path, the UI falls back to its local registry response.
