(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
module.exports = class CharParser {

   constructor ()
   {
      this.ctx = document.createElement('canvas').getContext('2d')
   }


   measure ( ch, font='30px serif' )
   {
      this.ctx.font = font
      return this.ctx.measureText(ch).width
   }

}
},{}],2:[function(require,module,exports){
module.exports = class Helper {

   constructor ()
   {
      this.startTime = 0
   }


   start ()
   {
      this.startTime = Date.now()
   }


   end ()
   {
      console.log( Date.now() - this.startTime )
   }

}
},{}],3:[function(require,module,exports){
"use strict"


module.exports = class TextStream {


   constructor ( charParser, text )
   {
      this.charParser = charParser
      this.text       = text
      this.cursor     = 0
      this.lines      = []
      this.eof        = false
      this.a = 1
   }



   lineAll ()
   {
      while ( !this.eof )
         this.lineSlice(1000)
   }



   lineSlice ( lineWidth = 0 )
   {
      const start = this.cursor

      this.lineEnd( lineWidth )

      if ( !this.eof )
      {
         const end  = this.cursor
         const line = this.text.slice( start, end )

         this.lines.push( line )
      }
   }



   lineEnd ( lineWidth )
   {
      let width = 0
      let next  = 0

      while ( true )
      {
         next = this.peek()

         if ( this.eof ) break

         if ( width + next > lineWidth ) break

         if ( width + next === lineWidth ) {
            this.cursor++
            break
         }

         width += next
         this.cursor++
      }
   }



   peek ()
   {
      const ch = this.text[this.cursor+1]

      if ( ch )
         return this.charParser.measure(ch)

      else {
         this.eof = true
         return 0
      }
   }

}
},{}],4:[function(require,module,exports){
exports.CharParser = require('./CharParser'),
exports.TextStream = require('./TextStream')
exports.Helper     = require('./Helper')


if ( window ) {
   Object.assign(window, exports)
}
},{"./CharParser":1,"./Helper":2,"./TextStream":3}]},{},[4]);
