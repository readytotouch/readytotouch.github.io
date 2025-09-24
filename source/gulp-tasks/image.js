import pkg from 'gulp'
import pump from 'pump'
import svgo from 'gulp-svgo'

const { src, dest } = pkg

export default function images(cb, inputImages, outputImages) {
  return pump(
    [
      src(inputImages),
      svgo({
        plugins: [{ removeViewBox: false }, { cleanupIDs: false }, { removeTitle: true }],
      }),
      dest(outputImages),
    ],
    cb,
  )
}
