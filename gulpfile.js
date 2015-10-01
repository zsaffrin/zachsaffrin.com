var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    rename     = require('gulp-rename'),
    uglify     = require('gulp-uglify'),
    sass       = require('gulp-sass'),
    prefixer   = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

gulp.task('reload', function() {
    return gulp.src('index.html')
        .pipe(livereload());
});

gulp.task('zsSiteApp-js', function () {
    return gulp.src('src/site-app/**/*.js')
        .pipe(concat('zs-site-app.js'))
        .pipe(gulp.dest('js/'))
        .pipe(rename('zs-site-app.min.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('js/'));
});

gulp.task('sass-overeasy', function () {
    gulp.src('src/overeasy/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(rename('overeasy_zs.css'))
        .pipe(gulp.dest('./css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename('overeasy_zs.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['src/site-app/**/*.js'], ['zsSiteApp-js']);
    gulp.watch(['src/overeasy/**/*.scss'], ['sass-overeasy']);
    gulp.watch([
        'js/**/*.js',
        'css/**/*.css',
        'views/**/*.html',
        'index.html'
        ], ['reload']);
});

gulp.task('default', ['zsSiteApp-js', 'sass-overeasy', 'watch']);

