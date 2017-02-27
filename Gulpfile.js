'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var pug = require('gulp-pug')
var nodemon = require('gulp-nodemon')

gulp.task('style', function(){
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('public'));
	console.log("se ha modificado...el css")
})

/*gulp.task('html', function(){
	gulp
		.src('./views/index.pug')
		.pipe(pug())
		.pipe(gulp.dest('public'));
	console.log("modificado pug...")
})*/

gulp.task('build', function(){
	nodemon({
		script: 'index.js',
		ext: 'js',
		tasks: ['build']
	})
	.on('start', function(){
		console.log('se ha iniciado')
	})
	.on('restart', function(){
		console.log('se ha reiniciado')
	})
})

//gulp.watch('index.scss',['style'])
gulp.task('watch', function(){
	gulp.watch('index.scss',['style'])
	//gulp.watch('./views/index.pug',['html'])
})

gulp.task('default', ['style','build','watch'])
//gulp.task('default', ['style','html','watch'])