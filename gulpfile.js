/*------------------------------------*\
::Plugins
\*------------------------------------*/
var gulp         = require('gulp');
var emailBuilder = require('gulp-email-builder');

gulp.task('emailBuilder', function() {
	return gulp.src(['./html/*.html'])
	.pipe(emailBuilder())
	.pipe(gulp.dest('./dist/'));
});

/*------------------------------------*\
::Watch
\*------------------------------------*/
gulp.task('watch', function() {
	// gulp.watch('**/*.scss', ['css']);
	// general file changes
	gulp.watch('./html/*.html', ['emailBuilder']);
});

/*------------------------------------*\
::Task Combinations
\*------------------------------------*/
gulp.task('default', ['watch']);
