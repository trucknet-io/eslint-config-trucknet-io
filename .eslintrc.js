module.exports = {
  "globals": {
    "Event": false,
    "ReactElement": false,
    "ReactClass": false
  },
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "standard-react"
  ],
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "no-console": ["error", { allow: ["warn", "error"] }],
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
    // flow
    "flowtype/require-valid-file-annotation": [
      2,
      "always"
    ],
    // react
    "react/prop-types": 0,
    "react/no-unused-prop-types": 0,
    "react/jsx-indent-props": [0, 2],
    "react/jsx-indent": [0, 2]
  }
}