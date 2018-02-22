"use strict"


module.exports = class Helper {

   constructor()
   {
      this.startTime = 0
   }


   start()
   {
      this.startTime = Date.now()
   }


   end()
   {
      console.log( Date.now() - this.startTime )
   }
}