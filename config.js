var path = require('path');

var taskConfig = {

  component: {
    name: 'css-npm-demo',
    scripts: {
      entry: './src/index.js',
      output: {
        library: 'demo'
      }
    }
  },

  example: {
    src: './examples/src',
    dist: './examples/dist',
    index: 'index.html',
    script: 'index.js',
    alias: {
      'react-jstree': path.resolve(__dirname, './src')
    },
    files: []
  }

};

module.exports = taskConfig;
