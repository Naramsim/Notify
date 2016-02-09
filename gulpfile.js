var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var cssnano = require('gulp-cssnano');

gulp.task('default', ['compress','minify-css']);
gulp.task('compress', function() {
  return gulp.src('notify.js')
    .pipe(uglify())
    .pipe(rename("notify.min.js"))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('notify.css')
    .pipe(cssnano())
    .pipe(rename("notify.min.css"))
    .pipe(gulp.dest('dist'));
});