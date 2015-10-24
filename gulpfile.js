var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var minifyCss = require('gulp-minify-css');

gulp.task('default', ['compress','minify-css']);
gulp.task('compress', function() {
  return gulp.src('notify.js')
    .pipe(uglify())
    .pipe(rename("notify.min.js"))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('notify.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename("notify.min.css"))
    .pipe(gulp.dest('dist'));
});