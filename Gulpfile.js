var gulp = require('gulp');
var connect = require('gulp-connect-php7');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
let cleanCSS = require('gulp-clean-css');



gulp.task('connect', function() {
	connect.server({
		port: 3000
	});
});

gulp.task('watch', function(){
	gulp.watch(
		['./resources/js/*'],
		['uglify']
	);
	gulp.watch(
		['./resources/sass/*'],
		['sass']
	);
});

gulp.task('sass', function () {
	return gulp.src('./resources/sass/app.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('uglify', function () {
	return gulp.src('./resources/js/*.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('default', ['sass', 'uglify', 'connect', 'watch']);
