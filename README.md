### Add apps ReactJs Vite

`pnpm create vite@latest`

- Update vite.config.ts

```
export default defineConfig({
  resolve: {
    alias: {
      "@workspace/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
});
```

- Add to tsconfig.app.json

```
{
  "compilerOptions": {
  "baseUrl": ".",
    "paths": {
      "@workspace/ui/*": ["../../packages/ui/src/*"]
    }
  },
  "include": ["src"]
}
```

- Read docs: https://ui.shadcn.com/docs/installation/vite

### Add apps Nextjs

`...`

### Run with single app

`yarn dev --filter=[App Name]`
