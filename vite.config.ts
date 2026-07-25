import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

const GH_USER = process.env.GITHUB_USERNAME || "";
const GH_REPO = process.env.GITHUB_REPO || "kands";
const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";
const base = isGhPages && GH_USER ? `/${GH_REPO}/` : "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    tsconfigPaths()
  ],
})
