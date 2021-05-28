import { env } from './env.js'

export async function getMetrics(metricID, amount){
    const request = await fetch(env.host + env.api_port + '/api/metric/' + metricID + '/amount/' + amount, {mode: 'cors'})
    
    const response = await request.json()

    return response
}

export async function getAverage(metricID) {
    const response = await getMetrics(metricID, 'average')

    const average = Math.round(response[0])

    return average
}