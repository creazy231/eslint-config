# Installation

```bash
# npm
npm install -D @creazy231/eslint-config

# yarn
yarn add -D @creazy231/eslint-config
```

# Usage
```js
// .eslintrc.js
module.exports = {
  extends: [
    "@creazy231"
  ],
  rules: {
    // your overrides
  }
}
```

## Nuxt.js
```bash
# npm
npm install -D @nuxt/eslint-config @creazy231/eslint-config

# yarn
yarn add -D @nuxt/eslint-config @creazy231/eslint-config
```
```js
// .eslintrc.js
module.exports = {
  extends: [
    "@nuxt/eslint-config",
    "@creazy231",
  ],
  rules: {
    // your overrides
  }
}
```
