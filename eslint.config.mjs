import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js", "webpack.*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  eslintConfigPrettier,
];
