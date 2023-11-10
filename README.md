# @calmery/tailwind-config

[![@calmery/tailwind-config - npm](https://img.shields.io/npm/v/@calmery/tailwind-config.svg)](https://www.npmjs.com/package/@calmery/tailwind-config)

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
