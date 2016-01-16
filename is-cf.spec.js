var tape = require('tape');
var isCF = require('./');

tape.test('should be a boolean', function (test) {
	test.ok(typeof isCF, 'boolean');
	test.end();
});

tape.test('should be false locally', function (test) {
	process.env.VCAP_APPLICATION = {};
	test.notOk(isCF);
	test.end();
});

tape.test('should be true on cloud foundry', function (test) {
	process.env.VCAP_APPLICATION = {};
	test.ok(require('require-uncached')('./'));
	test.end();
});
