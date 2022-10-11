const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa.claropay.com.ar/ingresar',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin : true,
    'chromeWebSecurity': false,
    "cucumberautocomplete.strictGherkinCompletion": true,
    "include": ["node_modules/cypress", "./cypress/**/*.js"],
    'supportFile': false,
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      
      return config;
    },

    specPattern: '**/e2e/*.feature',
  },
});