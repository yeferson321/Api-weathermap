# Apitime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## About

This project is part of my `personal portfolio`. Access current weather data for any location on Earth, including over 200,000 cities! We collect and process weather data from various sources, such as global and local weather models, satellites, radars, and a vast network of weather stations. Data is available in JSON, XML, or HTML format. Api: (https://openweathermap.org)

## Get geolocation by browser

```
geolocation(){
  if (navigator.geolocation) { 
    //check if geolocation is available
    navigator.geolocation.getCurrentPosition( (position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }
}
```

## Add marker on map

```
marker([data.lat, data.lon]).addTo(this.map).bindPopup(data.city);
```

## Your unique API key

Create a .env file and add your API_KEY.
You can always find it on your account page under the (https://home.openweathermap.org/api_keys)

## Temperature is available in Fahrenheit, Celsius and Kelvin units.

For temperature in Fahrenheit use units=imperial
For temperature in Celsius use units=metric
Temperature in Kelvin is used by default, no need to use units parameter in API call
List of all API parameters with units (openweathermap.org/weather-data)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
