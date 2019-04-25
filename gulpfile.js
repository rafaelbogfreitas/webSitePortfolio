var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');

//minify images with imagemin
gulp.task('images', function(){
	return gulp.src('app/images/**/*.+(png|jpg|jpeg|svg|gif)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
})



//useref task to unify scripts and uglify
gulp.task('useref', function(){
	return gulp.src('app/index.html')
		//uglify
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		//cssnano
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist/'))
});

//Compile Sass and watch the file
gulp.task('sass', function(){
	return gulp.src('app/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/**/*.scss', gulp.series('sass'));
});

//
