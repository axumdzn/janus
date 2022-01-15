'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
 const nodeSass = require('node-sass');

 module.exports = function(defaults) {
   let app = new EmberApp(defaults, {
     sassOptions: {
       implementation: nodeSass,
       includePaths: [
         'node_modules/bulma',
       ],
     }
   });

   return app.toTree();
 };