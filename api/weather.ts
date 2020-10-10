
import fetch from 'node-fetch'
import { NowRequest, NowResponse } from '@vercel/node'

const API_KEY = process.env.OPENWEATHER_API

const getWeatherUrl = (lon:number, lat:number, apiKey:string) => {
  return `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
}

export default async (request: NowRequest, response: NowResponse) => {
  const body = JSON.stringify({ })

  const weatherRes = await fetch(getWeatherUrl(53.3331, -6.2489, API_KEY))
  console.log(weatherRes)

  response.status(200).send(body)
}
