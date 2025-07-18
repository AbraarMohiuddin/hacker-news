# Hacker News Nuxt App

This project is a minimal Hacker News client built with **Nuxt 3**, **Vue 3** and **TypeScript**.  It fetches stories from the public Hacker News API and displays them using Vuetify components.  State management is handled with **Pinia** and Vite powers the development server.

## Stack

- [Nuxt 3](https://nuxt.com) and Vite
- TypeScript
- [Pinia](https://pinia.vuejs.org/) for state management
- [Vuetify](https://vuetifyjs.com/) for UI components

## Project Structure

```
├─ app.vue             # Root application layout
├─ components/         # Shared Vue components
├─ composables/        # Reusable Composition API logic
├─ pages/              # Route components rendered by Nuxt
├─ plugins/            # Nuxt/Vue plugins (e.g. Vuetify setup)
├─ public/             # Static assets served as-is
├─ server/             # Server side code or configuration
├─ nuxt.config.ts      # Nuxt configuration
└─ tsconfig.json       # TypeScript configuration
```

## Quickstart

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start a development server at `http://localhost:3000`:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview a production build locally:

   ```bash
   npm run preview
   ```

## Sample API Usage

The application calls the official Hacker News REST API.  Example endpoints:

```http
GET https://hacker-news.firebaseio.com/v0/topstories.json
GET https://hacker-news.firebaseio.com/v0/item/<id>.json
```

Results are displayed in the UI and clicking a story opens its details in a dialog.

Use the navigation bar to switch between Top, New, Job and Ask stories.

## Running Tests

Unit tests are written with [Vitest](https://vitest.dev/).  Execute all tests with:

```bash
npm test
```


