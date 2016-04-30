module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double",
            {"avoidEscape": true, "allowTemplateLiterals": true}
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "warn"
    }
};
