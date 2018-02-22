"use strict"


exports.THREE      = require('three')
exports.Helper     = require('./Helper')
exports.CharParser = require('./CharParser'),
exports.TextStream = require('./TextStream')
exports.Painter    = require('./Painter')


if ( window ) {
   Object.assign(window, exports)
}