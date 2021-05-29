import { getAverage } from './get-metric.js'
import { DEGREES, HUMIDITY, HUMID_AVG, MOISTURE_1, MOISTURE_1_AVG, MOISTURE_2, MOISTURE_2_AVG, PERCENT, TEMP, TEMP_AVG } from './const.js'
import setupSSE from './sse-setup.js'


export async function init() { 

    await setupSSE() 

    populateAverages()
}
export async function populateAverages(){
    const moisture1Average = await getAverage(MOISTURE_1)
    const moisture2Average = await getAverage(MOISTURE_2)
    const tempAverage = await getAverage(TEMP)
    const humidAverage = await getAverage(HUMIDITY)

    document.getElementById(HUMID_AVG).innerText = humidAverage + PERCENT
    document.getElementById(TEMP_AVG).innerHTML= tempAverage + DEGREES
    document.getElementById(MOISTURE_2_AVG).innerText = moisture2Average
    document.getElementById(MOISTURE_1_AVG).innerText = moisture1Average
}


