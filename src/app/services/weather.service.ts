import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getRequesWeather(lat: number, lon: number) {
    /**
     * It returns a promise of a JSON object containing the weather data for the given latitude and
     * longitude
     */
    let config: any = { responseType: 'json' };

    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', `${environment.appid}`)
      .set('units', environment.units);
    config['params'] = params;

    return this.http.get(`${environment.uri}`, config);
  }

  searchWeather(city: string) {
    /**
     * We're using the HttpClient to make a GET request to the OpenWeatherMap API, passing in the city name
     * as a query parameter, and returning the response as a JSON object
     */
    let config: any = { responseType: 'json' };

    const params = new HttpParams()
      .set('q', city)
      .set('limit', 4)
      .set('appid', `${environment.appid}`);
    config['params'] = params;

    return this.http.get<any>(`${environment.uriSearch}`, config);
  }
}
