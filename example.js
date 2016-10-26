#!/usr/bin/env node


var hashprimer = require('./hashprimer');
var hash = new hashprimer();

var OS = {};
hash.set(OS, 0.155, [ "AWS", "us-east-1a", "c4.xlarge", "cost" ]);
hash.set(OS, null, [ "AWS", "us-east-1a", "c4.xlarge", "count" ], hash.increment);
hash.set(OS, 10, [ "AWS", "us-east-1a", "c4.xlarge", "count" ], hash.increment);
hash.set(OS, 'i-a1b2b3c4', [ "AWS", "us-east-1a", "c4.xlarge", "instances" ], hash.array);
hash.set(OS, 'i-a4b3b2c1', [ "AWS", "us-east-1a", "c4.xlarge", "instances" ], hash.array);
hash.set(OS, null, [ "AWS", "us-east-1a", "c4.xlarge", "monthly_charge" ], function(hash, value) {
  return (OS.AWS['us-east-1a']['c4.xlarge'].cost * OS.AWS['us-east-1a']['c4.xlarge'].count * 24 * 30);
});

console.log(JSON.stringify(OS));
