module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    // 'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    "prettier"
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    vueFeatures: {
      filter: true,
      interpolationAsNonHTML: false
    }
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁用 debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁用 console
    "@typescript-eslint/no-var-requires": 0,
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': ['error', {
      "ignores": ["index"]
    }],
    'vue/max-attributes-per-line': ['error', {
      "singleline": {
        "max": 5
      },
      "multiline": {
        "max": 1
      }
    }]
  }
}