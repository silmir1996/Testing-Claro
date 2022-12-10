const { defineConfig } = require('cypress');
// const { Before, After } = require('cypress-cucumber-preprocessor/steps');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ni.claropay.com.ar/Inicio',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    experimentalSessionSupport : true,
    viewportWidth: 800,
    viewportHeight: 660,
    'chromeWebSecurity': false,
    "cucumberautocomplete.strictGherkinCompletion": true,
    "include": ["node_modules/cypress", "./cypress/**/*.js"],
    'supportFile': 'Testing-Claro/support/commands.js',
    
    async setupNodeEvents(on, config) {
      require('cypress-data-session/src/plugin')(on, config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      require("cypress-localstorage-commands/plugin")(on, config);

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      
      return config;
    },

    specPattern: '**/e2e/*.feature',
  },
});