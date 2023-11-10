# @calmery/tailwind-config

[![@calmery/tailwind-config - npm](https://img.shields.io/npm/v/@calmery/tailwind-config.svg)](https://www.npmjs.com/package/@calmery/tailwind-config)
[![Build and lint](https://github.com/calmery/tailwind-config/actions/workflows/build-and-lint.yaml/badge.svg?branch=develop)](https://github.com/calmery/tailwind-config/actions/workflows/build-and-lint.yaml)

## Installation

```
$ npm i -D @calmery/tailwind-config
```

## Usage

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("@calmery/tailwind-config"),
  content: ["./src/**/*.{ts,tsx}"],
};
```

```ts
import config from "@calmery/tailwind-config";
import type { Config } from "tailwindcss";

export default {
  ...config,
  content: ["./src/**/*.{ts,tsx}"],
} satisfies Config;
```
