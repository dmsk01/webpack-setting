module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, { indentMode: 2 }],
        "react/jsx-filename-extention": [2, { "extentions": [".js", ".jsx", ".tsx"] }],
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "react/react-in-jsx-scope": "off",
        "indent": [2, 2],
        "import/no-unresolved": 'off',
        "import/prefer-default-export": 'off',
        "import/extentions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-unused-vars": 'warn',
        "semi": [2, "always"],
        "@typescript-eslint/no-extra-semi": "off",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "i18next/no-literal-string": ['error', { markupOnly: true }]
    },
    "globals": {
        "__IS_DEV__": true
    }
}
