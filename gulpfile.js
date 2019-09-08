const gulp = require('gulp');
const sass = require('gulp-sass');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const html = require('gulp-minify-html');

//html sources and destination
const htmlSrc = 'app/*.html';
const htmlDest = 'dist/';

//images sources and destination
const imageSrc = 'app/images/**/*.+(png|jpg|jpeg|svg|gif|ico)';
const imageDest = 'dist/images';

//.scss sources and destination
const sassSrc = 'app/scss/**/*.scss';
const sassDest = 'app/css';

//css sources and destinations
const cssSrc = 'app/css/*.css';
const cssDest = 'dist/css';

//javascript sources and destination
const jsSrc = 'app/js/**/*.js';
const jsDest = 'dist/js';

//fonts sources and destination
const fontSrc = 'app/fonts/**/*';
const fontDest = 'dist/fonts';


//minify images
function images(cb){
	gulp.src(imageSrc)
	.pipe(imagemin())
	.pipe(gulp.dest(imageDest))
	cb();
}

//minify HTML
function minifyHTML(cb){
	gulp.src(htmlSrc)
	.pipe(html())
	.pipe(gulp.dest(htmlDest));
	cb();
}

//minify JavaScript
function minifyJS(cb){
	gulp.src(jsSrc)
	.pipe(concat('script.js'))
	.pipe(uglify())
	.pipe(gulp.dest(jsDest));
	cb();
}

//minify CSS
function minifyCSS(cb){
		gulp.src(cssSrc)
		.pipe(cssnano())
		.pipe(gulp.dest(cssDest))
		cb();
}

//compile .scss files and watches the files for changes
function compileSass(cb){
	gulp.src(sassSrc)
	.pipe(sass())
	.pipe(gulp.dest(sassDest));
	cb();
}


//pipes the font files to the dist folder
function pipeFonts(cb){
	gulp.src(fontSrc)
	.pipe(gulp.dest(fontDest));
	cb();
}

//watch for changes in scss files
function watch(cb){
	gulp.watch(sassSrc, compileSass);
}


//'gulp dist' command to minify files and pipe all to the dist folder
exports.dist = gulp.series(minifyHTML, minifyJS, minifyCSS, pipeFonts, images);
//'gulp start' command to start watching and compiling .scss files
exports.start = gulp.series(watch);
