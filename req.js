'use strict';

module.exports = function(mod) {

  mod.__cache = {};

  mod.require = function(elements) {
    for(var a in elements) {
      mod.__cache[a] = require(elements[a]);
    }
  }

  return mod.__cache;
}
