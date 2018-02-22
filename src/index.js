exports.CharParser = require('./CharParser'),
exports.TextStream = require('./TextStream')
exports.Helper     = require('./Helper')


if ( window ) {
   Object.assign(window, exports)
}