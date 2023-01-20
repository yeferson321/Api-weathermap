/* Importing the HttpParams class from the Angular HttpClientModule. */
import { HttpParams } from '@angular/common/http';

/* Defining an interface. */
export interface HttpConfig {
  responseType: 'json';
  params: HttpParams;
}