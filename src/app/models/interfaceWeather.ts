/* Defining the structure of the data that is returned from the API. */
export interface InterfaceWeather {
  weather: weather[];
  main: main[];
  wind: wind[];
  sys: sys[]
  name: string;
}

class weather {
  constructor(
    public description: string,
    public icon: string
  ) {}
}

interface main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface wind {
  speed: number;
}

interface sys {
  country: string;
}