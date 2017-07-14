'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['sass', 'scripts']);

gulp.task('sass', () => {
  gulp
    .src(['./sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [ './node_modules/bootstrap-sass/assets/stylesheets' ]
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', () => {
  gulp
    .src([
      './node_modules/jquery/dist/jquery.js',
      './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
      './scripts/**/*.js'
    ])
    .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass', 'scripts']);
});
