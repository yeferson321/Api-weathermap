export const environment = {
  production: true,
  uri: 'https://api.openweathermap.org/data/2.5/weather',
  uriSearch: 'https://api.openweathermap.org/geo/1.0/direct',
  units: 'metric',
  /* Create a .env file and add your API_KEY. */
  appid: process.env['API_KEY'],
};
