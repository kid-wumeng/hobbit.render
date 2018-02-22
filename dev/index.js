window.onload = function ()
{
   $.get('test-text.txt').done(done)
}


function done ( text )
{
   const helper     = new Helper
   const charParser = new CharParser
   const textStream = new TextStream({ charParser, text })

   helper.start()

   textStream.lineAll( 400 )
   console.log( textStream.lines )

   helper.end()

   console.log(THREE);
}