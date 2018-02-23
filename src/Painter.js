const THREE = require('three')
const Box   = require('./Box')



class Painter
{
   constructor ( opt = {} )
   {
      const defaultOpt = {
         canvasWidth:  0,
         canvasHeight: 0,
         pixelRatio:   1
      }

      opt = Object.assign( defaultOpt, opt )

      this.opt      = opt
      this.canvas   = this.createCanvas( opt )
      this.scene    = this.createScene( opt )
      this.camera   = this.createCamera( opt )
      this.renderer = this.createRenderer( opt )
   }
}




Painter.prototype.createCanvas = function ( opt )
{
   const canvas = document.createElement( 'canvas' )

   canvas.width  = opt.canvasWidth
   canvas.height = opt.canvasHeight

   document.body.appendChild( canvas )

   return canvas
}



Painter.prototype.createScene = function ( opt )
{
   const scene = new THREE.Scene()
   return scene
}



Painter.prototype.createCamera = function ( opt )
{
   const fov    = 45
   const aspect = opt.canvasWidth / opt.canvasHeight
   const near   = 1
   const far    = 1000

   const camera = new THREE.PerspectiveCamera( fov, aspect, near, far )

   camera.position.z = 5

   return camera
}



Painter.prototype.createRenderer = function ( opt )
{
   const renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
   })

   renderer.setSize( opt.canvasWidth, opt.canvasHeight )
   renderer.setPixelRatio( opt.pixelRatio )

   return renderer
}



Painter.prototype.paint = function ()
{
   this.renderer.render( this.scene, this.camera )
}



Painter.prototype.paintShape = function ()
{
   const box = new Box
   this.scene.add(box.get())
   this.paint()
}



module.exports = Painter