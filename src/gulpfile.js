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
        .pipe(gulp.dest('../build/js/'))
        .pipe(gulp.dest('../js/'));

    gulp.src('views/js_src/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../build/views/js/'))
        .pipe(gulp.dest('../dist/views/js/'))
        .pipe(gulp.dest('../views/js/'));
});

gulp.task('clean-css', function() {
    gulp.src('css_src/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../build/css/'))
        .pipe(gulp.dest('../dist/css/'))
        .pipe(gulp.dest('../css/'));

    gulp.src('views/css_src/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../build/views/css/'))
        .pipe(gulp.dest('../dist/views/css/'))
        .pipe(gulp.dest('../views/css/'));
});

gulp.task('inlineCss', function() {
    gulp.src('./index.html')
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest('../build/'));

    gulp.src('./project-2048.html')
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest('../build/'));

    gulp.src('./project-mobile.html')
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest('../build/'));

    gulp.src('./project-webperf.html')
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest('../build/'));
});

gulp.task('html-min', function() {
    gulp.src('../build/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('../dist/'))
        .pipe(gulp.dest('../'))


    gulp.src('views/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('../dist/views/'))
        .pipe(gulp.dest('../views/'))
});

gulp.task('default', ['scripts', 'clean-css', 'inlineCss', 'html-min']);