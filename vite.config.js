/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        home: resolve('newsletter.html'),
      },
    },
  },
});
