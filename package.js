Package.describe({
  name: 'telstar:videoframe',
  version: '0.0.1',
  summary: 'A port of the VideoFrame API. Easily capture SMPTE Time Code and seek video',
  git: 'https://github.com/kjetilge/VideoFrame.git',
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
