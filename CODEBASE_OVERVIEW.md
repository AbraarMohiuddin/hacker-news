# Codebase Overview

This document provides a high level look at the main parts of the project.

## Application Responsibilities

- **components/** – Vue components shared across pages (e.g. `navbar.vue`).
- **composables/** – Reusable Composition API utilities.  `useStories.ts` contains logic for loading stories from the Hacker News API.
- **pages/** – Route definitions rendered by Nuxt.  The `index.vue` page lists stories and handles the dialog for viewing them.
- **plugins/** – Nuxt plugins such as the Vuetify setup found in `plugins/vuetify.ts`.
- **public/** – Static assets like `favicon.ico`.
- **server/** – Contains server configuration such as `tsconfig.json`.

## Main Flow

1. `pages/index.vue` uses `useStories()` to fetch the top stories based on the query parameter.
2. Stories are displayed using Vuetify cards and dialogs.
3. Navigation is handled by `components/navbar.vue` which links to different story types.

This structure keeps front‑end components, shared logic and configuration separate for clarity and ease of maintenance.

