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
