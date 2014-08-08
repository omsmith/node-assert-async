'use strict';

function assertAsync (fn, cb) {
	// jshint validthis: true
	var self = this;

	var sync = false,
		result = fn(function () {
			sync = true;
			cb.apply(self, arguments);
		});

	if (sync) {
		throw new Error('Expected cb to be called asynchronously');
	}

	return result;
}

module.exports = assertAsync;
