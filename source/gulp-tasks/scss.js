import { src, dest } from 'gulp'
import pump from 'pump'
import plumber from 'gulp-plumber'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import csso from 'gulp-csso'
import rename from 'gulp-rename'
import cache from 'gulp-cached'
import dependents from 'gulp-dependents'
import flatten from 'gulp-flatten'
import injectString from 'gulp-inject-string'

const sass = gulpSass(dartSass)

// define postcss plugins
const postcssPlugins = [autoprefixer({ cascade: false })]

export function scssDev(inputScss, outputCss, browserSync, cb) {
  return pump(
    [
      src(inputScss),
      cache('sass'),
      dependents(),
      plumber(),
      sourcemaps.init(),
      sass(),
      postcss(postcssPlugins),
      sourcemaps.write(),
      flatten(),
      dest(outputCss),
      browserSync.stream(),
    ],
    cb,
  )
}

export function scssBuild(inputScss, outputCss, cb) {
  return pump(
    [
      src(inputScss),
      sass(),
      csso({ restructure: false }),
      postcss(postcssPlugins),
      injectString.prepend('<style>'),
      injectString.append('</style>'),
      rename(path => {
        // eslint-disable-next-line no-param-reassign
        path.extname = '.html'
      }),
      flatten(),
      dest(outputCss),
    ],
    cb,
  )
}
