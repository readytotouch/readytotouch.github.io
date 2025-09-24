import pkg from 'gulp'
import pump from 'pump'

const { src, dest } = pkg

export default function fonts(cb, inputFonts, outputFonts) {
  return pump([src(inputFonts), dest(outputFonts)], cb)
}
