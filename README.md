# FRONTEND

## Vite Configuration

```cmd
npm create vite@latest ./ -- --template react-swc-ts
npm i
```

## Packages

### Dependencies

1. firebase
2. react-hot-toast
3. react-icons
4. react-router-dom
5. react-table
6. sass

### Dev Dependencies

1. @types/react-table

## Initial Vite app refactoring

1. Delete `src/index.css`
2. Initialize `src/App.tsx`
3. Create `src/styles/app.scss`
4. Remove `index.css` route from `main.tsx` and import `./styles/app.scss` in it

## Lazy load

Defer the loading component's code until it's rendered for the first time. It increases the app's performance by reducing loading time.

Syntax:

```ts
const ComponentName = lazy(() => import(componentPath));
```

## Suspense wrapper over Routes

Display a fallback until its children have finished loading.

Syntax:

```ts
<Suspense fallback={<FallbackComponent />}>
    {children}
</Suspense>
```
