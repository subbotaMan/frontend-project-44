import globals from "globals";
import pluginJs from "@eslint/js";
import * as tseslint from "@typescript-eslint/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
// import { Linter } from 'eslint'

export default [
  {
    files: ["eslint.config.js"],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/quotes": "off",
      "@stylistic/semi": "off",
      "@stylistic/no-multiple-empty-lines": "off",
    },
  },
  stylistic.configs.recommended,
  pluginJs.configs.recommended,
  {
    files: ["**/*.{js,ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint,
      "@stylistic": stylistic,
    },
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@stylistic/quotes": "off",
      "@stylistic/semi": "off",
      "@stylistic/no-multiple-empty-lines": "off",
      "@stylistic/no-trailing-spaces": "off",
    },
  },
  {
    ignores: ["dist/"],
  },
]; // satisfies Linter.Config[]
