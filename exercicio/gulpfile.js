const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImage() {
    return gulp.src('./source/images/*', {encoding: false})
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavascript () {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' //além de compilar, o sass deve comprimir/minificar o arquivo.
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

// Todo esse código irá se transformar em uma função só, automatizando-os.
// function funcaoPadrao(callback){
//     setTimeout(function() {
//         console.log("Executando via Gulp");
//         callback();
//     }, 3000);
// }

// function dizOi(callback){
//     setTimeout(function() {
//         console.log("Oi Gulp");
//         dizTchau();
//         callback();
//     }, 1500);
// }

// function dizTchau() {
//     console.log("Tchau Gulp");
// }

// exports.default = gulp.parallel(funcaoPadrao, dizOi);
// exports.dizOi = dizOi;
// exports.sass = compilaSass;
// exports.watch = function() {
//     gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(compilaSass));
// }
// exports.javascript = comprimeJavascript;
// exports.images = comprimeImages;

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(comprimeJavascript));
    gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(comprimeImage));
}