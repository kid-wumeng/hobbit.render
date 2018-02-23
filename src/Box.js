const THREE = require('three')



class Box
{
   constructor ( opt = {} )
   {
      const defaultOpt = {
      }

      opt = Object.assign( defaultOpt, opt )

      this.opt      = opt
      this.geometry = this.createGeometry( opt )
      this.material = this.createMaterial( opt )
   }
}



Box.prototype.get = function ( opt )
{
   return new THREE.Mesh( this.geometry, this.material )
}



Box.prototype.createGeometry = function ( opt )
{
   const geometry = new THREE.BoxGeometry( 1, 1, 1 )
   return geometry
}



Box.prototype.createMaterial = function ( opt )
{
   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
   material.transparent = true
   material.wireframe = true
   return material
}



module.exports = Box