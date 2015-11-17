var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minifyhtml = require('gulp-minify-html');
var browserSync = require('browser-sync').create();

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


gulp.task('server', ['uglify', 'minifycss', 'minifyhtml'], function () {
    return browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
});


gulp.task('minifyhtml', function () {
    return gulp.src('src/**/*.html')
        .pipe(minifyhtml())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('uglify', function () {
    return browserify('src/js/main.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        //.pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('minifycss', function () {
    return gulp.src('src/**/*.css')
        .pipe(concat('main.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['uglify']);
    gulp.watch('src/**/*.css', ['minifycss']);
    gulp.watch('src/**/*.html', ['minifyhtml']);
});

gulp.task('default', ['server', 'watch']);
