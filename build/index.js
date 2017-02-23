'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.streamClient = exports.streamParser = undefined;

var _parser = require('./lib/parser');

var _parser2 = _interopRequireDefault(_parser);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var streamClient = function streamClient(options, callback) {
	var parser = new _parser2.default();

	(0, _request2.default)(options, callback).pipe(parser);

	return parser;
};

exports.streamParser = _parser2.default;
exports.streamClient = streamClient;
//# sourceMappingURL=index.js.map