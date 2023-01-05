import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  /**
   * This function is used to make a request to the OpenWeatherMap API, passing latitude and longitude
   * as a query parameter
   */
  getRequesWeather(lat: number, lon: number) {
    let config: any = { responseType: 'json' };

    /* Setting the query parameters for the request. */
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', `${environment.appid}`)
      .set('units', environment.units);
    config['params'] = params;

    return this.http.get(`${environment.uri}`, config);
  }

  /**
   * This function is used to make a request to the OpenWeatherMap API, passing in the city name
   * as a query parameter
   */
  searchWeather(city: string) {
    let config: any = { responseType: 'json' };

    /* Setting the query parameters for the request. */
    const params = new HttpParams()
      .set('q', city)
      .set('limit', 4)
      .set('appid', `${environment.appid}`);
    config['params'] = params;

    return this.http.get<any>(`${environment.uriSearch}`, config);
  }
}
