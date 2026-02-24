# Doctor Antonio Comperatore

Personal website built with React + Vite.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

The site will be available at **http://localhost:5173** (Vite's default port). Changes to the source files will hot-reload automatically.

### 3. Lint the code

```bash
npm run lint
```

### 4. Run the tests

```bash
npm test
```

To run in watch mode (re-runs on file changes):

```bash
npm run test:watch
```

To run with a coverage report:

```bash
npm run test:coverage
```

### 5. Build for production

```bash
npm run build
```

The output will be in the `dist/` folder.

### 6. Preview the production build locally

```bash
npm run preview
```

This serves the `dist/` folder on a local static server so you can verify the production build before deploying.

### 7. Deploy to GitHub Pages

```bash
npm run deploy
```

This runs the build first (`predeploy`), then publishes the `dist/` folder via `gh-pages`.
