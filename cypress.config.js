const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  require('cypress-mochawesome-reporter/plugin')(on);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: '**/*.{feature,features}',
    setupNodeEvents,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Test report Telnyx site Cypress+Cucumber",
      embeddedScreenshots: true,
      inlineAssets: true
    },
    video: false
  },
});
