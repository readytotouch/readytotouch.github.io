import pkg from 'gulp'
import pump from 'pump'
import inject from 'gulp-inject'
import fs from 'fs'

const { src } = pkg

function setStringSrc(typeFIle, dataSrc) {
  return typeFIle === '.css' ? `<link href="${dataSrc}" rel="stylesheet" />` : `<script src="/${dataSrc}"></script>`
}

// eslint-disable-next-line import/prefer-default-export
export function injectString(cb, pathInput, pathOutput, build) {
  return pump(
    [
      src(pathInput),
      inject(src([build], { read: false }), {
        transform: filepath => {
          const fileExtension = filepath.slice(filepath.indexOf('assets'))
          const typeFile = filepath.slice(filepath.lastIndexOf('.'))
          let stringToInsert = filepath.slice(filepath.lastIndexOf('/') + 1, filepath.lastIndexOf('.'))
          if (stringToInsert.lastIndexOf('_') >= 0) {
            stringToInsert = stringToInsert.slice(0, stringToInsert.lastIndexOf('_'))
          }
          fs.mkdirSync(pathOutput, { recursive: true })
          fs.writeFileSync(`${pathOutput}${stringToInsert}.html`, setStringSrc(typeFile, fileExtension))
        },
      }),
    ],
    cb,
  )
}
