'use strict';
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var paths = {
    styles: {
        src: 'stylesheets/**/*.scss',
        dest: 'css'
    }
}

function scss() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.styles.dest));
}
exports.scss = scss

function watch() {
    scss()
    gulp.watch(paths.styles.src, scss);
}
exports.watch = watch