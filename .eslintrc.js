module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'jest/globals': true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'plugin:jest-dom/recommended',
        'plugin:jest/all',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'jest', 'jest-dom'],
    rules: {
        'arrow-body-style': 'off',
        'jest/no-hooks': 'off',
        'jest/prefer-expect-assertions': 'off',
        'jest/max-expects': 'off',
        'react/jsx-props-no-spreading': 'off',
    },
    overrides: [
        {
            files: [
                'jest-setup.js',
                'rollup.config.js',
                '__tests__/**/*',
                'packages/**/*',
            ],
            rules: {
                'import/no-extraneous-dependencies': 'off',
            },
        },
        {
            files: [
                'packages/precept-froyojs/**/*',
                'packages/precept-vue/**/*',
            ],
            rules: {
                'react/require-render-return': 'off',
                'react/prefer-stateless-function': 'off',
                'react/no-unused-class-component-methods': 'off',
                'react/sort-comp': 'off',
                'react/react-in-jsx-scope': 'off',
                'react/button-has-type': 'off',
            },
        },
        {
            files: ['packages/**/*', 'apps/**/*'],
            rules: {
                'jest/require-hook': 'off',
            },
        },
    ],
};
