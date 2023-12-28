import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Weather } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = process.env['API_KEY'] || 'ADD_YOUR_API_KEY_IN_.ENV';

  /**
   * Accepts the name of the city as a single parameter and queries the OpenWeather API for that city
   */
  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      // We used the set method to create query parameters because the HttpParams object is immutable.
      // Calling the constructor for each parameter you want to pass will throw an error
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);
    return this.http.get<Weather>(this.apiUrl + 'weather', { params: options });
  }
}
