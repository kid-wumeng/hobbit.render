window.onload = function ()
{
   // $.get('test-text.txt').done(done)

   const painter = new Painter({
      canvasWidth:  window.innerWidth,
      canvasHeight: window.innerHeight,
      pixelRatio:   window.devicePixelRatio
   })

   painter.paintShape()
}


// function done ( data )
// {
//    const textStream = new text.TextStream(data)
//
//    helper.start()
//
//    textStream.lineAll( 400 )
//    console.log( textStream.lines )
//
//    helper.end()
//
//    console.log(THREE);
// }