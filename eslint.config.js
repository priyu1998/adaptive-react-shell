import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default {
  ignores: ["dist"],
  extends: [
    js.configs.recommended,
    "plugin:react/recommended",  // Add React plugin recommended rules
    "plugin:react-hooks/recommended",
  ],
  files: ["**/*.{js,jsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    globals: globals.browser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // You can customize rules here, for example:
    "no-unused-vars": "warn",
  },
};