# WAT field hockey frontend

Astro site for youth- and parent-forward field hockey in Alabama.

## Content checklist (photos & config)

Before launch, replace placeholders with real club assets:

- **`public/images/hero.svg`** — Swap for a wide team or clinic photo (e.g. `hero.jpg`). Update [`src/pages/index.astro`](src/pages/index.astro) to point `HeroMedia` at the new file and write accurate `alt` text.
- **Clinic / action shots** — Add images under `public/images/` and reference them from future gallery or event sections as you grow the site.
- **`src/config/site.ts`** — Set `contactEmail` and uncomment `socialLinks` with your real Instagram/Facebook URLs.

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
