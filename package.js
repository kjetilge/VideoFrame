Package.describe({
  name: 'telstar:videoframe',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A port of the VideoFrame API to Meteor. There are only a small changes of the original code, witch is the ability to update values when video is seeked. This Readme has also been updated to reflect meteor usage.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('lib/VideoFrame.js');
  api.addFiles('videoframe.js', "client");
  api.export(['VideoFrame', 'FrameRates'], "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('telstar:videoframe');
  api.addFiles('videoframe-tests.js');
});
