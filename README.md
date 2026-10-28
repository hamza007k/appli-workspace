# Appli workspace

A responsive React and Vite landing page for a fictional collaborative workspace.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages whenever changes are pushed to `main`. The Vite configuration uses relative asset paths so the same build works at a GitHub project-page URL.

After creating the repository and pushing this project to its `main` branch, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source if it is not already selected. The workflow run and the repository's **Deployments** section show the published site URL.
