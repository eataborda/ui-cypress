const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  defaultCommandTimeout: 30000,
  responseTimeout: 30000,
  requestTimeout: 30000,
  pageLoadTimeout: 30000,
});
