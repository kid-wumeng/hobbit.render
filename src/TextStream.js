"use strict"


module.exports = class TextStream {


   constructor({ charParser, text })
   {
      this.charParser = charParser
      this.text       = text
      this.cursor     = 0
      this.lines      = []
      this.eof        = false
   }



   lineAll()
   {
      while( !this.eof )
         this.lineSlice(1000)
   }



   lineSlice( lineWidth = 0 )
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



   lineEnd( lineWidth )
   {
      let width = 0
      let next  = 0

      while(true){

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



   peek()
   {
      const ch = this.text[this.cursor+1]

      if(ch)
         return this.charParser.measure(ch)

      else{
         this.eof = true
         return 0
      }
   }
}