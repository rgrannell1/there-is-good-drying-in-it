
export enum WeatherState {
  Dry,
  FierceMild,
  Wet
}

export interface LocationData {
  readonly lon: number,
  readonly lat: number
}

export interface AppState {
  location?: LocationData
  mode: WeatherState
}
