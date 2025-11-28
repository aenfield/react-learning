/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    env: {
        node: true,
        es2021: true,
    },
    overrides: [
        {
            files: ['*.test.js'],
            plugins: ['jest'],
            extends: ['plugin:jest/recommended']
        },
    ],
};