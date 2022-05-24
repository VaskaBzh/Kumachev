import * as flsFunctions from './modules/functions.js'
import slider from './modules/slider.js'
import header from './modules/header.js'
import scroll from './modules/scroll.js'
import burger from './modules/burger.js'
import modal from './modules/modal.js'
import nav from './modules/nav.js'
import formValidate from './modules/formValidate.js'

flsFunctions.isWebp()
slider('.header', 'slide', '0')
slider('.about__slider', 'slide', 'arrows')
header()
burger()
modal()
nav()
formValidate()
scroll()