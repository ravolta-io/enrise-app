# ENRISE Coding Challenge

This repository contains the coding challenge I did for Enrise.

By **Tristan Jacobs**

## About the app

The app is a simple NextJS app that fetches and displays random Kanye West quotes from the https://kanye.rest API.

## Build Info

[![Netlify Status](https://api.netlify.com/api/v1/badges/8cb4c5c8-046a-4e66-9976-d65ded15c486/deploy-status)](https://app.netlify.com/sites/enrise-kanye-quotes/deploys)

This app is deployed via Netlify.

## Installation

The install instructions follow the basics for NextJS, or any other React type project.

1. Clone repo (obviously).
2. Install dependencies with `npm install` or `yarn`.
3. Create a `.env.local` file containing:

   ```
   NEXT_PUBLIC_API_ENDPOINT=<API ENDPOINT GOES HERE>
   ```

4. Run the app with `npm run dev` or `yarn dev`.

5. Test the app by running one of the following commands
   ```json
      "test": "jest", // run basic test suite
      "test:watch": "jest --watchAll", // run test suite with a watcher
      "test:coverage": "jest --coverage", // run test coverage
      "check-types": "tsc --pretty --noEmit", // check TypeScript types
      "check-format": "prettier --check .", // check prettier formatting
      "check-lint": "eslint . --ext ts --ext tsx --ext js", // check for linter issues
      "format": "prettier --write .", // format code conform prettier config
      "test-all": "npm run check-format && npm run check-lint && npm run check-types && npm run test" // run all tests
   ```
