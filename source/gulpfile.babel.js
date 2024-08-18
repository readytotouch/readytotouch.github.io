// define gulp plugins
import { series, parallel, watch, task } from 'gulp'
import browserSyncImport from 'browser-sync'
import cache from 'gulp-cached'
import del from 'del'

// import gulp tasks and source files
import { scssDev, scssBuild } from './gulp-tasks/scss'
import { script, scriptBuild } from './gulp-tasks/scripts'
import { injectString } from './gulp-tasks/injectString'
// import spritesBuild from './gulp-tasks/spritesBuild';
import images from './gulp-tasks/image'
import html from './gulp-tasks/html'
import fonts from './gulp-tasks/fonts'
import { publicSource, devSource, watchSource } from './gulp-tasks/pathSrc'

// save reference to created browser-sync instance, and save reference to the 'reload' method
const browserSync = browserSyncImport.create()
const reload = done => {
  browserSync.reload()
  done()
}

// static server + browserSync watching for all files
task('serve', () => {
  browserSync.init({
    server: {
      baseDir: devSource.browserSyncBaseDir,
    },
    notify: false,
  })
})

// compile sass into CSS dev
task('scss', cb => scssDev(devSource.scssPages, publicSource.css, browserSync, cb))

// compile sass into CSS prod
task('build-scss', cb => scssBuild(devSource.scssPages, publicSource.pathOutputCss, cb))

// compile js dev
task('js', cb => script(cb, devSource.jsPages, publicSource.js))

// compile js prod
task('build-js', cb => scriptBuild(cb, devSource.jsPages, publicSource.js))

// inject updated file name to header
task('inject-css', cb => injectString(cb, devSource.baseInputCss, publicSource.pathOutputCss, publicSource.cssBuild))

// inject updated file name to footer
task('inject-js', cb => injectString(cb, devSource.baseInputJs, publicSource.pathOutputJs, publicSource.jsBuild))

// clean generated css, js, svg-sprite in public directory && clean generated html in /templates/pages directory
const clean = () =>
  del(
    [
      publicSource.htmlFiles,
      publicSource.images,
      publicSource.css,
      publicSource.js,
      publicSource.pathOutputCss,
      publicSource.pathOutputJs,
    ],
    {
      force: true,
    },
  )

const cleanImages = () =>
  del(publicSource.images, {
    force: true,
  })

task('html', cb => html(cb, devSource.htmlSource, devSource.htmlBase, publicSource.htmlBuild))

// create image min
task('images', cb =>
  images(cb, [devSource.images, devSource.excludeSprites, devSource.excludeFavicon], publicSource.images),
)

// copy fonts
task('fonts', cb => fonts(cb, devSource.fonts, publicSource.fonts))

// watch any changes in html, css, js files
task('watch', () => {
  watch(watchSource.scss, series('scss', 'inject-css')).on('change', event => {
    console.log(`event happened: ${JSON.stringify(event)}`)
    if (event.type === 'deleted') {
      delete cache.caches.scss[event.path]
    }
  })
  watch(watchSource.js, series('js', 'inject-js', reload))
  watch(watchSource.html, series('html', reload))
  watch([watchSource.images, watchSource.excludeSprites, watchSource.excludeFavicon], series(cleanImages, 'images'))
})

// build task
task('build', series(clean, parallel('build-scss', 'build-js'), 'inject-js', 'fonts', 'html', 'images'))

// default task
task(
  'default',
  series(
    clean,
    parallel('scss', 'js'),
    'inject-css',
    'inject-js',
    'fonts',
    'html',
    'images',
    parallel('watch', 'serve'),
  ),
)
