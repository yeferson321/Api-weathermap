export interface InterfaceWeather {
  weather: weather[];
  main: main[];
  wind: wind[];
  sys: sys[]
  name: string;
}

interface weather { 
  description: string;
  icon: string;
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