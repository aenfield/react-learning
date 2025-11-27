/** @type {import('eslint').Linter.Config} */
module.exports = {
    plugins: ['jest'],
    extends: ['eslint:recommended', 'plugin:jest/recommended'],
    env: {
        node: true,
        es2021: true,
    }
};