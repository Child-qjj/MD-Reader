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
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential'
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
    'vue/no-multiple-template-root': 0,
    'vue/max-attributes-per-line': ['error', {
      singleline: 1
    }]
  },
  extends: [
    "prettier"
  ]
}