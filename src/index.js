"use strict"


exports.THREE   = require('three')
exports.helper  = require('./helper')
exports.text    = require('./text')
exports.Painter = require('./Painter')


if ( window ) {
   Object.assign(window, exports)
}