
import fetch from 'node-fetch'
import { NowRequest, NowResponse } from '@vercel/node'

const getWeatherUrl = (lon:number, lat:number, apiKey:string) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
}

const determineWeather = (content:Object) => {
  return {

  }
}

export default async (req: NowRequest, res: NowResponse) => {
  const API_KEY = process.env.OPENWEATHER_API

  try {
    var body = JSON.parse(req.body)
  } catch (err) {
    return res.status(400).send('invalid json')
  }

  if (typeof API_KEY === 'undefined') {
    return res.status(500).send('API key not defined.')
  }

  const weatherRes = await fetch(getWeatherUrl(body.lon, body.lat, API_KEY))
  const content = await weatherRes.json()
  const outBody = JSON.stringify(determineWeather(content))

  res.status(200).send(outBody)
}
