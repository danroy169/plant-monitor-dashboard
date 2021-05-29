import { AMOUNT, API_METRIC, AVERAGE } from './const.js'
import { env } from './env.js'

export async function getMetrics(metricID, amount){
    const request = await fetch(env.host + env.api_port + API_METRIC + metricID + AMOUNT + amount, {mode: 'cors'})
    
    const response = await request.json()

    return response
}

export async function getAverage(metricID) {
    const response = await getMetrics(metricID, AVERAGE)

    const average = Math.round(response[0])

    return average
}