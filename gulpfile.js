const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    imageOp = require('gulp-image-optimization'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');



gulp.task('minify-css', ['autoprefixer'], () =>
    gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('theme/static/css'))
);

gulp.task('uglify-js', () => {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('theme/static/js'))
});

gulp.task('autoprefixer', () =>
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/*.css'))
);

gulp.task('image-op', () => {
    gulp.src('images/*')
        .pipe(imageOp({
            optimizationLvel: 1,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('theme/static/images'))
});

gulp.task('default', ['minify-css', 'uglify-js', 'image-op']);

