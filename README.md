# assert-async

[![Build Status](https://travis-ci.org/omsmith/node-assert-async.svg)](https://travis-ci.org/omsmith/node-assert-async) [![Coverage Status](https://img.shields.io/coveralls/omsmith/node-assert-async.svg)](https://coveralls.io/r/omsmith/node-assert-async)

Throws an exception if your callback is called synchronusly by a function. The
intention is to catch coding errors during development and testing, helping you
avoid starving the event queue.

## Usage
```js
'use strict';

var assertAsync = require('assert-async');

var internalAsyncLibrary = require('./lib/foo');

assertAsync(internalAsyncLibrary, function (err, res) {
	// ...
});
```

## Installation

`npm install assert-async --save`

## License

MIT