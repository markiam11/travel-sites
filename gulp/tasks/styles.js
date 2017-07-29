var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars-async'),
	cssImport = require('postcss-import'),
	nested = require('postcss-nested'),
	mixins = require('postcss-mixins');
	 


gulp.task('styles', function(){

var plugins =[
	cssImport,
	mixins,
	cssvars,
	nested,
	autoprefixer

];

return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss(plugins))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));


});