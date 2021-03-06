var hasModule = require('has-module');
var chalk = require('chalk');
var DEFAULT_CALLBACK = function(notInstalled) {
  console.log('Not installed size: ' + notInstalled.length);
  console.log(
    chalk.green.bold(
      ['npm install ' + notInstalled.join(' ')].join(
        '\n'
      )
    )
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
