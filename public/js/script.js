import { LOADING } from './const.js'
import { init } from './render.js'


if(document.readyState === LOADING) { window.addEventListener('DOMContentLoaded', event => init()) }
else { init() }

if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../sw.js").then(registration => {
        console.log("SW Registered")
        console.log(registration)
    }).catch(error => {
        console.log("SW Registration Failed")
        console.log(error)
    })
}