// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    extends: [
        "@bryanmig/eslint-config/profile/default"
    ],
    parserOptions: {tsconfigRootDir: __dirname}
};
