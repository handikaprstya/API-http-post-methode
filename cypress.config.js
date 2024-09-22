const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  return config;
}

module.exports = defineConfig({
  pageLoadTimeout:10000,
  video: false,
  defaultCommandTimeout: 5000,
  e2e: {
    // specPattern: "**/*.feature",
    setupNodeEvents,
    supportFile: false,
  },
});
