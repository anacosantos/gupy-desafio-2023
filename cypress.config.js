const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xxxxxxxxxx",
  viewportHeight: 1000,
  viewportWidth: 1280,
  defaultCommandTimeout: 11000,
  pageLoadTimeout: 10000,
  numTestsKeptInMemory: 3,
  experimentalMemoryManagement: true,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    api_url: 'https://api.cypress.io/api',
    name: "Cypress tests",
    email: 'xxxxxxxxxxx@gmail.com',
    password: '12345678',
    silenceCommandLog: false,
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // node event
    },
    baseUrl: 'https://www.cypress.io/#/',
    testIsolation: false,
    chromeWebSecurity: false,
  },
});
