var hasModule = require('has-module');
var DEFAULT_CALLBACK = function(notInstalled) {
  console.warn(
    [
      'Not installed size: ' + notInstalled.length,
      'npm install ' + notInstalled.join(' ')
    ].join( '\n' )
  );
};

module.exports = function(inNames, inCallback) {
  var callback = inCallback || DEFAULT_CALLBACK;
  var notInstalled = inNames.filter(function(name) {
    return !hasModule(name);
  });
  notInstalled.length && callback(notInstalled);
  return !notInstalled.length;
};
