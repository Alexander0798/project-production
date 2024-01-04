module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
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
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react", "i18next"],
    rules: {
        indent: [2, 4],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/jsx-indent": [2, 4],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "linebreak-style": ["error", "windows"],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "i18next/no-literal-string": ["error", {markupOnly: true}]
    },
    settings: {
        react: {
            createClass: "createReactClass",
            pragma: "React",
            fragment: "Fragment",
            version: "18.2.0",
            flowVersion: "0.53",
        },
    },
};
