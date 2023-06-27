# Installation

```bash
# npm
npm install -D git+https://github.com/qcodesolutions/eslint-config-qwellcode.git

# yarn
yarn add -D git+https://github.com/qcodesolutions/eslint-config-qwellcode.git
```

# Usage
```js
// .eslintrc.js
module.exports = {
  extends: [
    "qwellcode"
  ],
  rules: {
    // your overrides
  }
}
```

## Nuxt.js
```bash
# npm
npm install -D @nuxt/eslint-config

# yarn
yarn add -D @nuxt/eslint-config
```
```js
// .eslintrc.js
module.exports = {
  extends: [
    "@nuxt/eslint-config",
    "qwellcode",
  ],
  rules: {
    // your overrides
  }
}
```
