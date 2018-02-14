module.exports = {
  parser: "babel-eslint",
  extends: "standard",
  plugins: [
    "flowtype"
  ],
  rules: {
    "semi": [2, "always"],
    "no-extra-semi": 2,
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "no-var": "error", //This rule is aimed at discouraging the use of var and encouraging the use of const or let instead.
    "no-const-assign": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "constructor-super": "warn",
    "prefer-const": "error",
    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false,
      "caughtErrors": "all",
      "caughtErrorsIgnorePattern": "^_" // catch(_error) is ignored
    }],
    "max-len": [2, 120, 2],
    "jsx-quotes": [2, "prefer-double"],
    "flowtype/require-valid-file-annotation": [
      2,
      "always"
    ],
  }
}