'use strict';

var mods = require('./req')(module);

module.require({
  db: 'webpack'
});

module.exports = function() {

  return function() {
    console.log(mods.db);
  };

};
