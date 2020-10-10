
import React from 'react'
import './App.css'

enum WeatherState {
  Dry,
  FierceMild,
  Wet
}

interface LocationData {

}

interface AppState {
  location?: LocationData
  mode: WeatherState
}

const dryContent = () => {
  return <p>There's fierce dryin' in it</p>
}

const fierceMildContent = () => {
  return <p>It's fierce mild</p>
}

const wetContent = () => {
  return <p>Day for the ducks</p>
}


export default class App extends React.Component<{}, AppState> {
  constructor (props:any) {
    super(props)

    this.state = {
      mode: WeatherState.FierceMild
    }
  }
  async componentDidMount () {
    try {
      const response = await fetch('/api/weather')
      console.log(response)
    } catch (err) {
      console.error(err) // TODO
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
