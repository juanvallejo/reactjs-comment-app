/**
 * Sample project for building app using gulp and browserify
 * @author juanvallejo
 */

// define environments
if(!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'development';
}


// define constants
var PATH_OUT 		= 'output.js';
var PATH_MIN_OUT 	= 'output.min.js';
var DESTINATION 	= './dist';

// include deps
var gulp 		= require('gulp');
var browserify 	= require('browserify');
var watchify 	= require('watchify');
var source 		= require('vinyl-source-stream');

// include plugins
var jshint 		= require('gulp-jshint');
var gutil 		= require('gulp-util');
var reactify	= require('reactify');
var concat 		= require('gulp-concat');
var uglify 		= require('gulp-uglify');
var buffer 		= require('vinyl-buffer');

// declare tasks
gulp.task('jshint', function() {

	gulp.src('./src/scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));

});

/**
 * Browserify task. 'Compiles' all modules into a single
 * file. Uses watchify to track down file changes.
 */
gulp.task('make', function() {

 	var bundle = browserify({

 		cache : {},
 		detectGlobals : false,
 		debug : true,
 		entries : ['./src/scripts/main.js'],
 		fast : true,
 		extensions : ['.js', '.jsx'],
 		packageCache : {},
 		fullPaths : true

 	});

 	// re-export bundle when watchify updates
 	bundle = watchify(bundle);
 	bundle.on('update', function() {
 		exportBundle(bundle);
 	});

 	// export all files into one task
 	return exportBundle(bundle);

});

/**
 * Pipes a bundle stream to a javascript file
 * @param bundle stream to pipe to ./dist/main.js
 */
function exportBundle(bundle) {

	console.log('exporting bundle');

	try {

		bundle
			.transform(reactify)
			.bundle()
			.on('error', function(error) {
				gutil.log('<bundle> ' + error.toString());
				gutil.beep();
			})
			.pipe(source('output.js'))
			.pipe(gulp.dest(DESTINATION));

	} catch(error) {
		console.log('<export> ' + error);
	}

}