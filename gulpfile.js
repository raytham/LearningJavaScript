const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
    // ESLint
    gulp.src(["js/**/*.js", "public/js/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());

    // Node source
    gulp.src("js/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    // Web browser source
    gulp.src("public/js/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});
