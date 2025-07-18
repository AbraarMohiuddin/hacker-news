# AI Guidelines

These notes are aimed at AI tools or code generation assistants working in this repository.

## Project Summary

This repository contains a small Hacker News client built with **Nuxt 3** and **TypeScript**.  Vuetify provides the UI and Pinia is used for state management.  The application fetches data from the public Hacker News API and displays stories in a simple interface.

## Folder Overview

- `components/` – reusable Vue components
- `composables/` – shared Composition API utilities (common logic)
- `pages/` – Nuxt pages that map directly to routes
- `plugins/` – app/plugins such as the Vuetify setup
- `server/` – server-side code or configuration

## Conventions

- Use the Vue Composition API for all components and composables.
- Prefer functional utilities (composables) over classes.
- Use **Pinia** rather than Vuex for state management.
- Keep code TypeScript-friendly and type safe.
- New components live in `components/` and pages in `pages/`.

## Behaviour

When generating code:

1. Follow the existing folder structure.
2. Keep styling minimal and rely on Vuetify components where possible.
3. Place shared logic in the `composables/` folder.
4. Avoid introducing heavy frameworks beyond Nuxt, Pinia and Vuetify.

