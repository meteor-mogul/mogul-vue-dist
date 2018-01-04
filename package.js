Package.describe({
  name: 'meteormogul:vue-dist',
  // This actually uses VueJS version 2.5.10 but bumping version to
  // get this in Atmosphere with an export of Vue symbol.
  version: '2.5.13',
  // Brief, one-line summary of the package.
  summary: 'Simple binding to Vue.js for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteor-mogul/mogul-vue-dist.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('ecmascript@0.9.0');
  api.export("Vue");
  api.addFiles('vue.js');
});

Package.onTest(function(api) {
});
