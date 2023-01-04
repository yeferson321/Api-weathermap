import { Component, Input } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { WeatherService } from 'src/app/services/weather.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  
  @Input() data: any;
  latitude: number = 48.8584;
  longitude: number = 2.3428;
  city: string = 'Paris, FR';
  map: any;
  result: any;

  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    /* Creating a map with a marker on it. */
    this.map = new Map('map');

    /* Adding a tile layer to the map. */
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 4,
      attribution:
        '&copy; <a href="http://openstreetmap.org">Openstreetmap</a>',
    }).addTo(this.map);

    /* Calling the onChange method with the default values. */
    this.onChange({ city: this.city, lat: this.latitude, lon: this.longitude });
  }

  onChange(data: any): void {
    this.weatherservice
      .getRequesWeather(data.lat, data.lon)
      .pipe(
        catchError((error) => {
          // maneja el error aquí
          console.log('hola', error);
          return error;
        })
      )
      .subscribe((data: any) => {
        if (data) {
          this.result = data;
        } else {
        }
      });
    // .subscribe(

    //   (data): any => {

    //     this.result = data
    //     console.log("resulytado", data)

    //   }, (error: any) => {

    //     console.log(error);

    //   }

    // )

    /* Setting the view of the map to the latitude and longitude of the city. */
    this.map.setView([data.lat, data.lon], 7);
  }
}
