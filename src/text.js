"use strict"



const canvas = document.createElement( 'canvas' )
const ctx    = canvas.getContext( '2d' )



// @param  { string } ch
// @param  { string } font
// @return { number } width

function measureCharWidth( ch, font='30px serif' )
{
   ctx.font = font
   return ctx.measureText(ch).width
}



class TextStream
{
   // @param { string } text

   constructor( text )
   {
      this.text   = text
      this.cursor = 0
      this.lines  = []
      this.eof    = false
   }
}



TextStream.prototype.lineAll = () =>
{
   while( !this.eof )
      this.lineSlice(1000)
}



TextStream.prototype.lineSlice = ( lineWidth = 0 ) =>
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



TextStream.prototype.lineEnd = ( lineWidth ) =>
{
   let width = 0
   let next  = 0

   while(true){

      next = this.peek()

      if( this.eof )                 break
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



TextStream.prototype.peek = () =>
{
   const ch = this.text[this.cursor+1]

   if(ch)
      return measureCharWidth(ch)

   else{
      this.eof = true
      return 0
   }
}