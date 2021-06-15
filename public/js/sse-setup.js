import { DEGREES, HUMID, MOISTURE_1, MOISTURE_2, PERCENT, SSE, TEMP } from './const.js'
import { env } from './env.js'

export default async function setupSSE() {
    // check if online/offline
    const evtSource = new EventSource(env.host + env.sse_port + SSE)

    const elements = {
        moisture1Reading: document.getElementById(MOISTURE_1),
        moisture2Reading: document.getElementById(MOISTURE_2),
        tempReading: document.getElementById(TEMP),
        humidReading: document.getElementById(HUMID),
    }

    evtSource.onmessage = event => { onMessage(event, elements) }
    
}

function onMessage(event, elements){
    const message = JSON.parse(event.data)

    if(message.fahrenheit) { elements.tempReading.innerHTML = message.fahrenheit + DEGREES }

    if(message.percent) { elements.humidReading.innerText = message.percent + PERCENT }

    if(message.sensorID === MOISTURE_1) { elements.moisture1Reading.innerText = message.moistureLevel }

    if(message.sensorID === MOISTURE_2) { elements.moisture2Reading.innerText = message.moistureLevel }
}