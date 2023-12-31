const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',// for html reports

  e2e: {
    //watchForFileChanges:false,
    //defaultCommandTimeout:500 
    setupNodeEvents(on, config) {
      // implement node event listeners here
          on('task', {downloadFile})
          require('cypress-mochawesome-reporter/plugin')(on) // for html reports
    
    },
  },
});


