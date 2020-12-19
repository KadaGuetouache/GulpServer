// Imports
const { src, dest, series, watch } = require( 'gulp' );
const sass = require( 'gulp-sass' );
const plumber = require( 'gulp-plumber' );
const browserSync = require( 'browser-sync' ).create(  );

const outputDir = './';

const scssPages = [ "./scss/main.scss" ];
const templates = [ "./index.html" ];


// Sass
function styles(cb) {
	src( scssPages, { allowEmpty: true } )
		.pipe( sass(  ).on( 'error', sass.logError ) )
		.pipe( dest( `${outputDir}/styles` ) )
		.pipe( browserSync.stream() )

		cb()
}

// Liver Server
function server(cb) {
	browserSync.init({
		notify: false,
		open: true,
		server: {
			baseDir: `./`
		}   
})
	cb();
}


function watcher(cb) {
	watch( './scss/**/*.scss', styles )
	watch( './scripts/*.js', browserSync.reload )
	watch( './*.html' ).on( 'change', browserSync.reload )

	cb();
}

exports.default = series( styles, server, watcher )
