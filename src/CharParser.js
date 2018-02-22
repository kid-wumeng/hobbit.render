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