Package.describe({
  name: 'meteormogul:vue-dist',
  version: '2.5.10',
  // Brief, one-line summary of the package.
  summary: 'Simple binding to Vue.js for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteor-mogul/mogul-vue-dist.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles('vue.js');
});

Package.onTest(function(api) {
});
