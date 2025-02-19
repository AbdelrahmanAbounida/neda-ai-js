import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  // testEnvironment: "./jest.env.cjs",
  modulePathIgnorePatterns: ["dist/", "docs/"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transformIgnorePatterns: ["node_modules/(?!troublesome-dependency/.*)"],
};

export default config;
