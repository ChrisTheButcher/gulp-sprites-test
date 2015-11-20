var gulp = require('gulp');
var sprite = require('gulp-sprite');
 
gulp.task('sprites', function () {
    gulp.src('./src/img/*.png')
      .pipe(sprite('sprites.png', {
        imagePath: 'dist/img',
        cssPath: './src/scss/utils/',
        preprocessor: 'scss'
      }))
      .pipe(gulp.dest('./dist/img/'));
});  