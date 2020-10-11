
import React from 'react'
import './App.css'

import {
  AppState,
  LocationData,
  WeatherState
} from './types'

const dryContent = () => {
  return <p>There's good dryin' in it</p>
}

const fierceMildContent = () => {
  return <p>It's fierce mild</p>
}

const wetContent = () => {
  return <p>Day for the ducks</p>
}

const getWeatherData = async (location:LocationData) => {
  try {
    var response = await fetch('/api/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(location)
    })
  } catch (err) {
    console.error(err)
    return
  }

  try {
    const data = await response.json()
  } catch (err) {
    console.error('failed to parse response as JSON')
    return
  }

  return {

  }
}

export default class App extends React.Component<{}, AppState> {
  constructor (props:any) {
    super(props)

    this.state = {
      mode: WeatherState.FierceMild
    }
  }
  async componentDidMount () {
    const location:LocationData = {
      lon: +53.3331,
      lat: -6.2489
    }

    const data = await getWeatherData(location)

    if (typeof data !== 'undefined') {

    }
  }
  render () {
    let content = <p></p>
    const { mode } = this.state

    if (mode === WeatherState.Dry) {
      content = dryContent()
    } else if (mode === WeatherState.FierceMild) {
      content = fierceMildContent()
    } else if (mode === WeatherState.Wet) {
      content = wetContent()
    }

    return (
      <div className="App">
        <main>{content}</main>
      </div>
    )
  }
}
