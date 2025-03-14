const { isPackageExists } = require("local-pkg");

const TS = isPackageExists("typescript");

const TS_RULES = TS
  ? {
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
    "@typescript-eslint/member-delimiter-style": [ "error", {
      multiline: {
        delimiter: "semi",
        requireLast: true,
      },
      singleline: {
        delimiter: "semi",
        requireLast: false,
      },
      multilineDetection: "brackets",
    } ],
    "@typescript-eslint/no-console": "off",
    "@typescript-eslint/brace-style": [ "error", "1tbs", { allowSingleLine: true } ],
    "@typescript-eslint/ban-ts-comment": "off",
  }
  : {
    "brace-style": [ "error", "1tbs", { allowSingleLine: true } ],
  };

module.exports = {
  root: true,
  extends: [ "@antfu", "plugin:tailwindcss/recommended" ],
  plugins: [],
  rules: {
    // TypeScript
    ...TS_RULES,

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
    "curly": [ "error", "multi-line", "consistent" ],

    // Tailwind
    "tailwindcss/no-custom-classname": "off",
    
    // Other rules
    "no-restricted-globals": "off",
    "antfu/if-newline": "off",
    "n/prefer-global/process": "off",
    
    // Vue
    "vue/no-deprecated-slot-attribute": "off",
    "vue/first-attribute-linebreak": [ "error", {
      singleline: "ignore",
      multiline: "below",
    } ],
    "vue/max-attributes-per-line": [ "error", {
      singleline: {
        max: 10, // Allow multiple attributes on a single line
      },
      multiline: {
        max: 1, // If multiline, only one attribute per line
      },
    } ],
    "vue/html-closing-bracket-newline": [ "error", {
      singleline: "never", // No newline for single-line elements
      multiline: "always", // Always newline for multiline elements
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
  settings: {
    tailwindcss: {
      callees: [ "tw", "apply", "twMerge" ],
    },
  },
};
