
// register babel to transpile before our tests run
require('babel-register')();

// disable webpack features that mocha doesnt understand
require.extensions['.css'] = function() {};
