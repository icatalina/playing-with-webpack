require('test.scss');
var $ = require('jquery');

$('body').append($('<div>hello</div>'));

window.setTimeout(function() {
  require.ensure([], function() {
    var mod1 = require('module1.js');
    console.log(mod1);
  });

}, 2000);
