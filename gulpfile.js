var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload');

gulp.task('sass', function() {
    return sass('./src/scss/loader.scss', { style: 'expanded' })
        .pipe(rename('zs.min.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('refresh', function() {
    return gulp.src(['./index.php'])
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./app/views/**/*.php', ['refresh']);
});

gulp.task('default', ['sass', 'watch']);

