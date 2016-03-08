/// <binding AfterBuild='moveIndex,moveJs' />

/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var paths = {
   indexSource: "./",
   indexTarget: "./wwwroot/",
   jsSource: "./scripts/javascript/",
   jsTarget: "./wwwroot/app/javascript/"
};

var appFilesToMove = [
   paths.indexSource + 'index.html',   
];

var jsFilesToMove = [   
   paths.jsSource + 'JavaScriptHasIssues.js'
];

gulp.task('moveIndex', function () {
   return gulp.src(appFilesToMove).pipe(gulp.dest(paths.indexTarget));
});

gulp.task('moveJs', function () {
   return gulp.src(jsFilesToMove).pipe(gulp.dest(paths.jsTarget));
});