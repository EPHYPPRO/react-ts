module.exports = {
  setupTestFrameworkScriptFile: require.resolve('./config/jest/setupTestFramework'),
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!**/*.d.ts"],
  setupFiles: ["<rootDir>/config/polyfills.js"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)",
    "<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)"
  ],
  testEnvironment: "node",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.tsx?$": "<rootDir>/config/jest/typescriptTransform.js",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$"
  ],
  moduleNameMapper: {
    "src(.*)$": "<rootDir>/src/$1",
    "test-utils(.*)$": "<rootDir>/test-utils/$1",
    "^react-native$": "react-native-web"
  },
  modulePaths: ["<rootDir>/src"],
  moduleFileExtensions: [
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "web.js",
    "js",
    "web.jsx",
    "jsx",
    "json",
    "node",
    "mjs"
  ],
  globals: {
    "ts-jest": {
      tsConfigFile: require.resolve("./tsconfig.test.json")
    }
  },
  babel: {
    presets: "react-app"
  }
};
