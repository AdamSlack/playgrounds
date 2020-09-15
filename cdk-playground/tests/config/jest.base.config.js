module.exports = {
  rootDir: '../../',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,ts}",
    "!**/*.config*",
    "!**/coverage/**",
    "!**/node_modules/**",
  ],
  coverageReporters: [
    "json",
    "lcov",
    "text"
  ],
};
