const canvas = document.createElement( 'canvas' )
const ctx    = canvas.getContext( '2d' )



////////////////////////////////////////
//
// Use the HTML5 Canvas to measure the width of a char
// 利用 HTML5 Canvas 策略一个字符的宽度
//
// @params {string} ch
// @params {string} font
// @return {number} width
//
////////////////////////////////////////

function measureCharWidth( ch, font='30px serif' )
{
   ctx.font = font
   return ctx.measureText(ch).width
}



////////////////////////////////////////
//
// @params {string} text
//
////////////////////////////////////////

class TextStream
{
   constructor( text )
   {
      this.text   = text
      this.cursor = 0
      this.lines  = []
      this.eof    = false
   }
}



TextStream.prototype.lineAll = function()
{
   while( !this.eof )
      this.lineSlice(1000)
}



////////////////////////////////////////
// @params {number} lineWidth
////////////////////////////////////////

TextStream.prototype.lineSlice = function( lineWidth = 0 )
{
   const start = this.cursor

   this.lineEnd( lineWidth )

   if( !this.eof )
   {
      const end  = this.cursor
      const line = this.text.slice( start, end )

      this.lines.push( line )
   }
}



////////////////////////////////////////
// 给定行宽，游标运动，直到本行正好塞完（若再塞一个就超过）
//
// @params {number} lineWidth
////////////////////////////////////////

TextStream.prototype.lineEnd = function( lineWidth )
{
   let width = 0
   let next  = 0

   while( true )
   {
      next = this.peek()

      if( this.eof ) break

      if( width + next > lineWidth ) break

      if( width + next === lineWidth ){
         this.cursor++
         break
      }

      else{
         width += next
         this.cursor++
      }
   }
}


////////////////////////////////////////
//
// Peek the next char's width, if end, this.eof = true
// 预读下一个字符的宽度，如果到底了，则置eof为true
//
// @return {number} nextCharWidth
//
////////////////////////////////////////

TextStream.prototype.peek = function()
{
   const ch = this.text[this.cursor+1]

   if(ch)
      return measureCharWidth(ch)

   else{
      this.eof = true
      return 0
   }
}



exports.TextStream = TextStream