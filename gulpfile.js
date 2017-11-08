const gulp = require('gulp');
const path = require('path');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

const imagePath = "src/assets/images/";

gulp.task('svgstore', () => {
    return gulp.src(`${imagePath}svg-icons/*.svg`)
        .pipe(svgmin((file) => {
            let prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest(`${imagePath}`));
});