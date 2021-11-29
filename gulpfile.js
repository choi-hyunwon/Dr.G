const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const html = require('gulp-file-include');
const del = require('del');
const htmlbeautify = require('gulp-html-beautify');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');


/* scss TASK*/
function scss() {
    return gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'))
}

function htmlPage() {
    return gulp.src('src/html/**/*.html')
        .pipe(html())
        .pipe(gulp.dest('dist/html/'))
}

function copyCss() {
    gulp.src(['src/scss/**/*.scss'])
        .pipe(gulp.dest('dist/css'));
    return gulp.src('src/scss/fonts/**',)
        .pipe(gulp.dest('dist/css/fonts'));
}

function copyIndex() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
}

function copyImg() {
    return gulp.src('src/img/**/**')
        .pipe(gulp.dest('dist/img'));
}

function copyFonts() {
    return gulp.src('src/fonts/**/**')
        .pipe(gulp.dest('dist/fonts'));
}

function copyJS() {
    return gulp.src('src/js/**')
        .pipe(gulp.dest('dist/js'));
}

function copyCSS() {
    return gulp.src('src/css/**')
        .pipe(gulp.dest('dist/css'));
}

function jsLib() {
    let sourceLib = [
        'src/js/lib/jquery.js',
        'src/js/lib/bootstrap.js',
        'src/js/lib/jquery-ui.js',
    ];
    return gulp.src(sourceLib)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/js'))
}

function jsCommon() {
    let sourceUi = ['src/js/common.js'];
    return gulp.src(sourceUi)
        .pipe(concat('common.js'))
        .pipe(gulp.dest('dist/js'))
}

function watchScss() {
    gulp.watch([
        'src/scss/**/*.scss',
        'src/scss/*.html'
    ], gulp.series(scss));
}

function watchHtml() {
    gulp.watch(['src/html/**/*.html', 'src/**.html'], gulp.series(htmlPage));
}

function watchInclude() {
    gulp.watch('src/html/include/*.html', gulp.series(htmlPage));
}

function watchJs() {
    gulp.watch('src/js/*.js', gulp.series(jsLib, jsCommon));
}

function watchImg() {
    gulp.watch('src/img/**/*', gulp.series(copyImg));
}

function watchFont() {
    gulp.watch('src/fonts/**/**', gulp.series(copyFonts));
}

function beautify() {
    var options = {
        indentSize: 4
    }
    return gulp.src('./dist/html/*.html')
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest('./dist/html/'))
}

function delDist() {
    return del('dist');
}

function delInclude() {
    return del('dist/html/include');
}

function setEnvProduct(cb) {
    process.env.NODE_ENV = 'product';
    cb();
}

function setEnvDevelope(cb) {
    process.env.NODE_ENV = 'develope'
    cb();
}


//task
gulp.task("dev", gulp.series(setEnvDevelope, delDist, scss, copyIndex, copyImg, copyFonts, jsLib, jsCommon, htmlPage))
gulp.task("dist", gulp.series(setEnvProduct, delDist, copyCss, copyImg, copyFonts, copyCSS, copyJS, htmlPage, delInclude, beautify));
gulp.task("watch", gulp.parallel(watchScss, watchHtml, watchInclude, watchJs, watchImg, watchFont));

gulp.task('browser-sync', function () {
    browserSync.init({
        port: 5959,
        server: {
            baseDir: "./",
            index: "dist/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', gulp.series(scss)).on('change', browserSync.reload);
    gulp.watch(['src/html/**/*.html'], gulp.series(htmlPage)).on('change', browserSync.reload);
    gulp.watch('src/html/include/*.html', gulp.series(htmlPage)).on('change', browserSync.reload);
    gulp.watch('src/js/*.js', gulp.series(jsCommon)).on('change', browserSync.reload);
    gulp.watch('src/img/**/*', gulp.series(copyImg)).on('change', browserSync.reload);
    gulp.watch('src/fonts/**/**', gulp.series(copyFonts)).on('change', browserSync.reload);
});

exports.default = gulp.series("dist");
