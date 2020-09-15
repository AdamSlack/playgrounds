const baseConfig = require('./jest.base.config.js')

module.exports = {
    ...baseConfig,
    roots: ['lambda/'],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    },
  };
