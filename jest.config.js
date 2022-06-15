module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  collectCoverageFrom: [
    '<rootDir>/src/**/**/*.js',
    '!**/node_modules/**',
    '!coverage/**',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist',
    '<rootDir>/example/',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
    '\\.(css|less)$': 'jest-transform-stub',
  },
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '.*\\.test\\.js$',
};
