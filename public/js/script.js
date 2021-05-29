import { LOADING } from './const.js'
import { init } from './render.js'


if(document.readyState === LOADING) { window.addEventListener('DOMContentLoaded', event => init()) }
else { init() }

