const gulp = require('gulp');
const sass = require('gulp-ruby-sass');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function() {
  sass('dev/css/sass/index.scss', {style: 'expanded'})
    .on('error', sass.logError)
    .pipe(gulp.dest('dev/css/'))
});

gulp.task('serve', function(){
  gulp.watch('dev/css/sass/*.scss', ['sass']);
});