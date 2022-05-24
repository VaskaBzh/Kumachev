// Основной модуль
import gulp from 'gulp'
// Импорт путей
import { path } from './gulp/config/path.js'
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js'

// Передаем значение в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}


// Импорт задач
import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { jsProjects } from './gulp/tasks/jsProjects.js'
import { jsMaterials } from './gulp/tasks/jsMaterials.js'
import { jsProject } from './gulp/tasks/jsProject.js'
import { jsPrivate } from './gulp/tasks/jsPrivate.js'
import { jsFAQ } from './gulp/tasks/jsFAQ.js'
import { images } from './gulp/tasks/images.js'
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js'
import { svgSprive } from './gulp/tasks/svgSprive.js'
import { zip } from './gulp/tasks/zip.js'
import { ftp } from './gulp/tasks/ftp.js'

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html) //gulp.series(html, ftp) / Автоматическая загрузка на ftp
    gulp.watch(path.watch.scss, scss) //gulp.series(scss, ftp)
    gulp.watch(path.watch.js, js) //gulp.series(js, ftp)
    gulp.watch(path.watch.js, jsProject) //gulp.series(jsProject, ftp)
    gulp.watch(path.watch.js, jsPrivate) //gulp.series(jsProject, ftp)
    gulp.watch(path.watch.js, jsMaterials) //gulp.series(jsProject, ftp)
    gulp.watch(path.watch.js, jsProjects) //gulp.series(jsProjects, ftp)
    gulp.watch(path.watch.js, jsFAQ) //gulp.series(jsFAQ, ftp)
    gulp.watch(path.watch.images, images) //gulp.series(images, ftp)
}

export { svgSprive }

// Аоследовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, jsProject, jsProjects, jsFAQ, jsPrivate, jsMaterials, images))

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Выполнение сценария по умолчанию
gulp.task('default', dev)