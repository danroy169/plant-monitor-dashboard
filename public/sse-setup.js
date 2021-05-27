import { env } from './env.js'
export default async function setupSSE() {
    const evtSource = new EventSource(env.host + env.sse_port + '/sse')

    const elements = {
        moisture1Reading: document.getElementById('moisture1'),
        moisture2Reading: document.getElementById('moisture2'),
        tempReading: document.getElementById('temp'),
        humidReading: document.getElementById('humid'),
    }

    evtSource.onmessage = event => { onMessage(event, elements) }

}

function onMessage(event, elements){
    const message = JSON.parse(event.data)

    if(message.fahrenheit) { 
        elements.tempReading.innerHTML = message.fahrenheit + "&#8457;"
    }

    if(message.percent) { 
        elements.humidReading.innerText = message.percent + "%"
    }

    if(message.sensorID === 'moisture1') { 
        elements.moisture1Reading.innerText = message.moistureLevel
    }

    if(message.sensorID === 'moisture2') { 
        elements.moisture2Reading.innerText = message.moistureLevel
    }
}