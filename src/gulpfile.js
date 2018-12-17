var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
gulp.task('devScss', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())

})