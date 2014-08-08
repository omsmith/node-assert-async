'use strict';

/* global describe , it */

var assert = require('assert');

var assertAsync = require('../');

describe('assert-async', function () {
	it('should not throw when cb is called asynchronously', function (done) {
		assert.doesNotThrow(function () {
			var fn = function (cb) {
					process.nextTick(cb);
				},
				cb = function () {};

			assertAsync(fn, cb);
		});

		done();
	});

	it('should throw when cb is called synchronously', function (done) {
		assert.throws(function () {
			var fn = function (cb) {
					cb();
				},
				cb = function () {};

			assertAsync(fn, cb);
		});

		done();
	});

	it('should return the called function result', function (done) {
		var fn = function (cb) {
				process.nextTick(cb);
				return 'foo';
			},
			cb = function () {};

		assert.equal(assertAsync(fn, cb), 'foo');

		done();
	});
});
