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
  // Define environment variables here
  env: {
    RUNNER_IP_ADDRESS: process.env.RUNNER_IP_ADDRESS || "192.168.1.218", // Default to localhost if not provided
    // Define other environment variables if needed
    // VARIABLE_NAME: process.env.VARIABLE_NAME,
  },
});
