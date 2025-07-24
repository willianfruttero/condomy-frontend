module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts','tsx','js','jsx'],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' }
};
