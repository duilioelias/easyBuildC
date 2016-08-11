var gulp = require('gulp');
var exec = require('child_process').exec;
var fs = require('fs');
var header = require('gulp-header');
var buildCommand = "gcc -Wall -ansi -g -pedantic -o2 src/*.c -o bin/main && ./bin/main";
var buildValGrind = "valgrind --track-origins=yes --leak-check=full ./bin/main";

gulp.task('build',function(){
	exec(buildCommand, function (error, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
	});
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.c', ['build']);
	gulp.watch('include/**/*.h', ['build']);
});

gulp.task('headers', function() {
	gulp.src(['./src/**/*.c','./src/**/*.h'])
  		.pipe(header(fs.readFileSync('header.txt')))
  		.pipe(gulp.dest('./dist/'))	
});

gulp.task('check', function() {
	
});

gulp.task('dist', function() {

});

gulp.task('compact', function(){

});

gulp.task('build-dist', function(){

});

gulp.task('memoryCheck', function(){
    exec(buildValGrind, function (error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('default',['build','watch'],function(){});