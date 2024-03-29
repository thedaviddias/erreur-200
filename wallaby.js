const compilerOptions = require('./tsconfig.json').compilerOptions

module.exports = (wallaby) => ({
  tests: ['**/*.test.tsx', '**/*.test.ts'],
  testFramework: 'jest',
  autoDetect: true,
  env: {
    type: 'node',
  },
  compilers: {
    '**/*.ts?(x)': wallaby.compilers.typeScript(compilerOptions),
  },
  debug: true,
})
