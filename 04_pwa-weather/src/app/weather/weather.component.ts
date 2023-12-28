import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Forecast, Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  weather: Weather | undefined;
  forecast$: Observable<Forecast[]> | undefined;

  constructor(private weatherService: WeatherService) { }

  /**
   * Subscribes to `WeatherService.getWeather()` and assigns the result to the `weather` component property
   */
  search(city: string) {
    this.weatherService
      .getWeather(city)
      .subscribe((weather) => (this.weather = weather));
    this.forecast$ = this.weatherService.getForecast(city);
  }
}
