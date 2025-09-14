# Get Started

## Scaffolding Your First Vite Project

- [Vite / Getting Started](https://vite.dev/guide/#scaffolding-your-first-vite-project)

```shell
# Create a new Vite project using the React + SWC + TypeScript template
pnpm create vite --template react-swc-ts crosstem.github.io
cd crosstem.github.io
```

## Creating a New Repository

- [GitHub CLI / gh repo create](https://cli.github.com/manual/gh_repo_create)

```shell
# Initialize a new Git repository
git init
# Create a new repository on GitHub
gh repo create
```

## Adding Workflows

- add [Makefile](../Makefile)
- [GitHub Docs / About GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#about-github-actions)
  - add [CI workflow](../.github/workflows/test.yaml)
  - add [CD workflow](../.github/workflows/gh-pages.yaml)
- set repository settings for GitHub Pages, refer to [Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart)

## Introduce CSS Framework

- [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)

```shell
# Install Tailwind CSS and its peer dependencies via npm
pnpm add -D tailwindcss @tailwindcss/vite

# Import Tailwind CSS styles in your CSS
echo '@import "tailwindcss";' >> src/index.css
```

## Introduce internationalization framework

- [react-i18next documentation](https://react.i18next.com/getting-started)
- [i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector)
