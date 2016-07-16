var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var inlineCss = require('gulp-inline-css');
var htmlmin = require('gulp-htmlmin');

gulp.task('scripts', function(){
    gulp.src('js_src/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../build/js/'));

    gulp.src('views/js_src/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../build/views/js/'))
        .pipe(gulp.dest('../dist/views/js/'));
});

gulp.task('clean-css', function() {
    gulp.src('css_src/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../build/css/'));

    gulp.src('views/css_src/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../build/views/css/'));
});

gulp.task('inlineCss', function() {
    gulp.src('./*.html')
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest('../build/'));

    gulp.src('views/*.html')
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest('../build/views/'));
});

gulp.task('html-min', function() {
    gulp.src('../build/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../dist/'))

    gulp.src('../build/views/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../dist/views/'))
});

gulp.task('default', ['scripts', 'clean-css', 'inlineCss', 'html-min']);