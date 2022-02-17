const gulp = require("gulp")
const svgSprite = require("gulp-svg-sprite")
const wrap = require("gulp-wrap")
const extname = require("gulp-extname")

gulp.task("inline", function () {
  return gulp
    .src("../src/static/icons/*.svg")
    .pipe(
      svgSprite({
        svg: {
          namespaceClassnames: false,
        },
        mode: {
          symbol: {
            inline: true,
            example: false,
          },
        },
      })
    )
    .pipe(wrap("<template>\n<%= contents %>\n</template>\r\n"))
    .pipe(extname(".vue"))
    .pipe(gulp.dest("../src/components/SvgSprite"))
})

gulp.task("external", function () {
  return gulp
    .src("../src/static/icons/*.svg")
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            inline: false,
            example: false,
          },
        },
      })
    )
    .pipe(gulp.dest("../static/icons/svg/sprite"))
})
