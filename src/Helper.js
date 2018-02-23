let startTimeStamp = 0



exports.start = () =>
{
   startTimeStamp = Date.now()
}



exports.end = () =>
{
   console.log( Date.now() - startTimeStamp )
}