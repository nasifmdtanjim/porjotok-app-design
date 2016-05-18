var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('serve', () => {
	gulp.src('.')
		.pipe(server({
			livereload: {
				enable: true,
				filter: (filePath, cb) => {
					cb(!(/\.git$|node_modules|\.vscode/.test(filePath)));
				}
			},
			port: 8100
		}));
});

gulp.task('default', ['serve']);