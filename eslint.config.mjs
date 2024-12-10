import pluginJs from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin';
import pluginImport from 'eslint-plugin-import';
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginUnusedImport from 'eslint-plugin-unused-imports';
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {ignores: ["node_modules", ".next", ".vercel", "next.config.js"],},
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { 
      globals: globals.browser, 
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module"
      },
    },
    settings: {react: {version: "detect"}},
    // "plugin:jsx-a11y/recommended",
    // "plugin:@next/next/recommended",
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginImport.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      'jsx-a11y': jsxA11y,
      'react-hooks': pluginReactHooks,
      'unused-imports': pluginUnusedImport,
      '@stylistic': stylistic,
      'react': pluginReact,
    },
    rules: {
      "no-empty": "warn",
      "no-console": "warn",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      "semi": ["warn", "never"],
      "import/order": [
        "warn",
        {
          "groups": [
            "type",
            "builtin",
            "object",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          "pathGroups": [
            {
              "pattern": "~/**",
              "group": "external",
              "position": "after"
            }
          ],
          "newlines-between": "always"
        }
      ],
      "import/no-unresolved": [
        "off", 
        { "caseSensitive": false }
      ],
      "import/named": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-unused-expressions": "off",
      "react/self-closing-comp": "error",
      "react/jsx-sort-props": [
        "warn",
        {
          "callbacksLast": true,
          "shorthandFirst": true,
          "noSortAlphabetically": false,
          "reservedFirst": true
        }
      ],
      "prettier/prettier": [
        "warn",
        {
          "endOfLine": "auto",
        }
      ],
      "no-console": "off"
    }
  },
];