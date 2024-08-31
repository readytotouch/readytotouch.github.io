import { src, dest } from 'gulp'
import pump from 'pump'

export default function fonts(cb, inputFonts, outputFonts) {
  return pump([src(inputFonts), dest(outputFonts)], cb)
}
