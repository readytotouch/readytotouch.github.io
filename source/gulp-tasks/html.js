import pkg from 'gulp'
import pump from 'pump'
import plumber from 'gulp-plumber'
import fileinclude from 'gulp-file-include'
import notify from 'gulp-notify'

const { src, dest } = pkg

// assemble html parts
export default function html(cb, inputHtml, basepath, outputHtml) {
  return pump(
    [
      src(inputHtml),
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      }),
      fileinclude({
        prefix: '@@',
        basepath,
        context: {
          sponsored: true,
          images_main_responsive_path__: '/assets/images/pages/main-responsive/',
          images_home_new_path__: '/assets/images/pages/online-new/',
          images_organizer_path__: '/assets/images/pages/organizer/',
          images_common_path__: '/assets/images/pages/common/',
          images_online_path__: '/assets/images/pages/online/',
          images_common_images_path__: '/assets/images/pages/common-images/',
          vacancies_images_path__: '/assets/images/pages/vacancy/',
          fonts_inter__: '/assets/fonts/inter/',
          fonts_montserrat__: '/assets/fonts/montserrat/',
        },
      }),
      dest(outputHtml),
    ],
    cb,
  )
}
