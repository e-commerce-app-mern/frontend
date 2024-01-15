# FRONTEND

## Vite configuration

```cmd
npm create vite@latest ./ -- --template react-swc-ts
npm i
npm run dev
```

## Packages

### Dependencies

```
npm i firebase react-hot-toast react-icons react-router-dom react-table sass chart.js react-chartjs-2
```

### Dev dependencies

```
npm i --save-dev @types/react-table
```

## Initial vite app refactoring

1. Delete `src/index.css`
2. Initialize `src/App.tsx`
3. Create `src/styles/app.scss`
4. Remove `index.css` route from `main.tsx` and import `./styles/app.scss`

## Lazy load

Defer the loading component's code until it's rendered for the first time. This increases the app's performance by reducing loading time.

```ts
const ComponentName = lazy(() => import(componentPath));
```

## Suspense wrapper over Routes

Display a fallback until its children have finished loading.

```ts
<Suspense fallback={<FallbackComponent />}>
    {children}
</Suspense>
```
