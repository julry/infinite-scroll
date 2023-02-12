module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-var': 'warn',
        'no-duplicate-case': 'error',
        'no-dupe-keys': 'error',
        'no-mixed-operators': [
            'error',
            {
                'groups': [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                'allowSamePrecedence': true
            }
        ],
        'quotes': ['warn', 'single'],
        'no-unused-vars': 'warn'
    }
}
