import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  verbose: true,
  extensionsToTreatAsEsm: ['.ts'],
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};

export default config;