module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/lib/'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  }
};
