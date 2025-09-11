export default {
    root: true,
    env: { node: true, es2023: true },
    parser: "@typescript-eslint/parser",
    parserOptions: { project: false, sourceType: "module" },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ]
};