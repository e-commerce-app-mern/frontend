# FRONTEND

## Vite configuration

```cmd
npm create vite@latest ./ -- --template react-swc-ts
npm i
npm run dev
```

## Packages

### Dependencies

```cmd
npm i firebase react-hot-toast react-icons react-router-dom react-table sass chart.js react-chartjs-2 @reduxjs/toolkit react-redux axios @stripe/react-stripe-js @stripe/stripe-js moment
```

### Dev dependencies

```cmd
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
<Suspense fallback={<FallbackComponent />}>{children}</Suspense>
```

## HTML [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) tag

This tag defines a dialog box or sub-window. The element makes it easy to create popup dialogs and modals on a web page.

## Deploy on Vercel
