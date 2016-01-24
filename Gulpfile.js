var gulp = require('gulp');
var sass = require('gulp-sass');
var image = require('gulp-image');

gulp.task('image', function () {
  gulp.src('./tpl/img/**')
    .pipe(image())
    .pipe(gulp.dest('./tpl/img'));
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**", ['sass']);
    gulp.watch("src/img/**", ['copy']);
    gulp.watch("src/js/**", ['copy']);
});

gulp.task('copy', function() {
    gulp.src('src/js/**')
      .pipe(gulp.dest('dist/js'));
    gulp.src('src/img/**')
      .pipe(gulp.dest('dist/img'));
});

gulp.task('sass', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('default', ['sass', 'copy', 'watch']);
gulp.task('compile', ['sass']);