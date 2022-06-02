// Получаем имя папки проверки
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())


const buildFolder = `./dist` // Также можно использовать rootFolder
const srcFolder = `./src`

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        jsContacts: `${srcFolder}/js/appContacts.js`,
        jsProject: `${srcFolder}/js/appProject.js`,
        jsProjects: `${srcFolder}/js/appProjects.js`,
        jsPrivate: `${srcFolder}/js/appPrivate.js`,
        jsMaterials: `${srcFolder}/js/appMaterials.js`,
        jsFAQ: `${srcFolder}/js/appFAQ.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/sass/style.sass`,
        html: `${srcFolder}/*.html`, //.pug
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/sass/**/*.{sass,scss}`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: 'test' // Зайти в папку на ftp (test)
}