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
