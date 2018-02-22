const gulp       = require('gulp')
const plumber    = require('gulp-plumber')
const browserify = require('browserify')
const colors     = require('colors')
const httpServer = require('http-server')
const source     = require('vinyl-source-stream')



gulp.task('build', function()
{
   browserify({
      entries: ['./src/index.js']
   })
      .bundle()
      .pipe(plumber())
      .pipe(source('hobbit.render.js'))
      .pipe(gulp.dest('./dev'))
      .pipe(gulp.dest('./dist'))
})



gulp.task('dev', function()
{
   httpServer.createServer({
      root: './dev'
   }).listen(8080)

   console.log('127.0.0.1:8080 ~'.green)

   gulp.start('build')

   gulp.watch('src/*.js', function(){
      gulp.start('build')
   })
})