import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
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

  //Jest
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
]);
