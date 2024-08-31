import { src, dest } from 'gulp'
import pump from 'pump'
import svgSprite from 'gulp-svg-sprite'
import glob from 'glob'
import es from 'event-stream'
import fs from 'fs'

export default function spriteBuilder(inputSvg, outputSvg, svgSymbols, cb) {
  const objectUrl = fs.readdirSync(inputSvg).map(elem => ({
    input: `${inputSvg}${elem}/**/*.svg`,
    output: `${outputSvg}${elem}/svg/`,
  }))

  glob(inputSvg, err => {
    if (err) {
      cb(err)
    }
    const tasks = objectUrl.map(elem =>
      pump(
        [
          src(elem.input),
          svgSprite({
            shape: {
              id: {
                generator: name => `icon-${name.slice(4, -4)}`,
              },
            },
            mode: {
              symbol: {
                dest: '.',
                sprite: svgSymbols,
                example: true,
              },
            },
            transform: [
              {
                svgo: {
                  plugins: [
                    {
                      removeViewBox: false,
                    },
                    {
                      removeTitle: true,
                    },
                  ],
                },
              },
            ],
          }),
          dest(elem.output),
        ],
        cb,
      ),
    )
    es.merge(tasks).on('end', cb)
  })
}
