const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '9fukjg',
  chromeWebSecurity: false,
  viewportWidth: 1024,
  viewportHeight: 768,
  retries: 2,
  env: {
    sauceURL: 'https://www.saucedemo.com',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://reqres.in"
  }
})
