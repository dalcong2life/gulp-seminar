var gulp = require('gulp');
var minifycss = require('gulp-minify-css');

gulp.task('minifycss', function () {
    return gulp.src('src/css/main.css')
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.css', ['minifycss']);
});

gulp.task('default', ['minifycss', 'watch']);
