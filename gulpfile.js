var gulp        = require('gulp');
var browserSync = require('browser-sync');
var prefix      = require('gulp-autoprefixer');
var sass        = require('gulp-sass');

gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        proxy: "http://localhost:4000"
    });
});

gulp.task('browser-reload', function() {
  browserSync.reload();
});

gulp.task('sass', function () {
    return gulp.src('sass/main.scss')
        .pipe(sass({
            includePaths: ['sass'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('public'));
});

gulp.task('js', function () {
    return gulp.src('js/client.js')
        .pipe(gulp.dest('public/client.js'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('js/**/*.js', ['js', 'browser-reload']);
    gulp.watch('**/*.html', ['browser-reload']);
});

gulp.task('default', ['browser-sync', 'watch']);
