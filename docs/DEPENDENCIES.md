# Reproducible dependency management

The repository uses Node.js 22 in both GitHub Actions and Vercel.

## What was resolved

A one-time GitHub Actions workflow generated `package-lock.json` from
the npm registry, then ran a clean `npm ci`, ESLint, TypeScript, the asset
validator and the production build. The verified file was committed to
`main` as `09c4ee0`.

The regular GitHub quality workflow now uses the tracked lockfile with
`npm ci --no-audit --no-fund`. The temporary workflow that generated
the lockfile was removed after its successful run.

## Local workflow

With Node.js 22:

```bash
npm ci
npm run lint
npm run typecheck
npm run check:assets
npm run audit:release
npm run build
npx playwright install chromium
npm run test:browser
```

When updating dependencies, run `npm install` locally with the actual
npm registry, review changes to package.json and package-lock.json,
run `npm ci` to verify the lockfile, then commit BOTH files. Do not
hand-edit resolved URLs/integrity hashes or delete the lockfile in CI.

Keep Vercel on Node.js 22, and preserve preview access protection,
noindex and editorial publication gates until approved launch.
