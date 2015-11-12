var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var browserSync = require('browser-sync').create();


gulp.task('server', ['browserify', 'resCopy', 'htmlCopy'], function () {
    return browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('browserify', function () {
    browserify('src/js/main.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('resCopy', function () {
    gulp.src('src/+(css|images|libs)/**/*.*')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('htmlCopy', function () {
    gulp.src('src/*.+(html|md)')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('watch', function () {
    gulp.watch('src/*.+(html|md)', ['htmlCopy']);

    gulp.watch('src/+(css|images|libs)/**/*.*', ['resCopy']);

    gulp.watch('src/js/**/*.js', ['browserify']);
});

gulp.task('default', ['server', 'watch'], function () {
    console.log("gulp start");
});

