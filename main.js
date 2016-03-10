var m = require('sandboxed-module');


var t2 = m.load('./test2', {
  requires: { 'fs': {mockedObject: 'weee'} }
});

console.log(t2.required);
