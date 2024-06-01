module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-new": "off",
    "@typescript-eslint/promise-function-async": "off",
    "array-callback-return": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "prefer-const": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
