import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Forecast, Weather } from './weather';

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
    return this.http.get<Weather>(this.apiUrl + 'weather', {
      params: this.getOptions(city),
    });
  }

  /**
   * The OpenWeather API provides the 5 Day / 3 Hour Forecast collection that can be used.
   * The collection returns a forecast every 3 hours for each day, so, for a weekly forecast,
   * we should just focus on the weather at 12:00pm each day
   */
  getForecast(city: string): Observable<Forecast[]> {
    return this.http
      .get<{ list: Forecast[]; }>(this.apiUrl + 'forecast', {
        params: this.getOptions(city),
      })
      .pipe(
        map((data: { list: Forecast[]; }) =>
          data.list.filter((forecast) =>
            forecast.dt_txt.toString().includes('12:00:00')
          )
        )
      );
  }

  /**
   * Set request apiKey and query string
   */
  private getOptions(city: string) {
    return (
      new HttpParams()
        // We used the set method to create query parameters because the HttpParams object is immutable.
        // Calling the constructor for each parameter you want to pass will throw an error
        .set('units', 'metric')
        .set('q', city)
        .set('appId', this.apiKey)
    );
  }
}
