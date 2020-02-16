const { src, dest, watch } = require("gulp");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");

const compileSass = () =>
  src("scss/style.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: ["last 2 versions", "ie >= 11", "Android >= 4"],
          cascade: false
        })
      ])
    )
    .pipe(dest("css"));

const watchSassFiles = () => watch("scss/style.scss", compileSass);

exports.default = watchSassFiles;
