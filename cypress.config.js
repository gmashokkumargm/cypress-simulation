const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.simscale.com",
    defaultCommandTimeout: 10 * 1000,
    requestTimeout: 15 * 1000,
    setupNodeEvents(on, config) {},
  },
});
