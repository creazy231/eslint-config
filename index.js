module.exports = {
  extends: [ "@antfu" ],
  plugins: [],
  rules: {
    // TypeScript
    "@typescript-eslint/quotes": [
      "error",
      "double",
    ],
    "@typescript-eslint/semi": [
      "error",
      "always",
    ],
    "@typescript-eslint/comma-dangle": [
      "error",
      "always-multiline",
    ],
    "@typescript-eslint/no-console": "off",

    // JavaScript
    "quotes": [
      "error",
      "double",
    ],
    "semi": [
      "error",
      "always",
    ],
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "object-curly-spacing": [
      "error",
      "always",
    ],
    "array-bracket-spacing": [
      "error",
      "always",
    ],
    "no-console": "off",

    // Vue
    "vue/first-attribute-linebreak": [ "error", {
      singleline: "ignore",
      multiline: "below",
    } ],
    "vue/component-tags-order": [ "error", {
      order: [ "docs", "template", "script:not([setup])", "script[setup]", "style[scoped]", "style:not([scoped])" ],
    } ],
    "vue/attributes-order": [ "error", {
      order: [
        "EVENTS",
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        [ "UNIQUE", "SLOT" ],
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "CONTENT",
      ],
      alphabetical: false,
    } ],
  },
};
