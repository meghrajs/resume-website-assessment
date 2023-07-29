const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "cypress-multi-reporters",
  defaultCommandTimeout: 10000,
  
  reporterOptions: {
	reporterEnabled: "mochawesome",
    reportDir: "cypress/reports/mochawesome", // Directory where reports will be generated
    overwrite: true, // Set this to true if you want to overwrite existing reports
    html: true, // Set this to true if you want to generate HTML reports
    json: false, // Set this to true if you want to generate JSON reports
	screenshotOnRunFailure: true
  },
});
