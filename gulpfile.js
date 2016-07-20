var gulp = require('gulp'),
  useref = require('gulp-useref');

gulp.task('default', function() {
  return gulp.src('app/index.html')
      .pipe(useref())
      .pipe(gulp.dest('app/dist'));
});
