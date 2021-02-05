module.exports = {
  extends: [
    'standard',
    'prettier',
    'plugin:jest/recommended'
  ],
  plugins: [
    'jest'
  ],
  env: {
    "jest/globals": true,
    browser: true,
    es6: true
  }
}
