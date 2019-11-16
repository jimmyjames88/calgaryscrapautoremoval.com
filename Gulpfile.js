var gulp = require('gulp');
var connect = require('gulp-connect-php7');

gulp.task('connect', function() {
  connect.server({
    port: 3000
  });
});

gulp.task('default', ['connect']);