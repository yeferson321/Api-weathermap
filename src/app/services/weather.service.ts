import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpConfig, InterfaceGeocoding, InterfaceWeather, ClassGeocoding } from '../models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  /**
   * This function is used to make a request to the OpenWeatherMap API, passing latitude and longitude
   * as a query parameter
   */
  getCurrentWeather(lat: number, lon: number) {

    /* Setting the query parameters for the request. */
    const config: HttpConfig = {
      responseType: 'json',
      params: new HttpParams()
        .set('lat', lat)
        .set('lon', lon)
        .set('appid', `${environment.appid}`)
        .set('units', `${environment.units}`),
    };

    return this.http.get<InterfaceWeather[]>(`${environment.uri}`, config)
  }

  /**
   * This function is used to make a request to the OpenWeatherMap API, passing in the city name
   * as a query parameter
   */
  getDirectGeocoding(city: string) {

    /* Setting the query parameters for the request. */
    const config: HttpConfig = {
      responseType: 'json',
      params: new HttpParams()
        .set('q', city)
        .set('limit', 4)
        .set('appid', `${environment.appid}`),
    };

    return this.http.get<InterfaceGeocoding[]>(`${environment.uriSearch}`, config)
      .pipe(
        map((resp: InterfaceGeocoding[]) => {
          return resp.map(geocoding => ClassGeocoding.geocodingFromJSON(geocoding))
        })
      )
  };
}