import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data2',
  templateUrl: './fetch-data.component2.html'
})
export class FetchDataComponent2 {
  public forecasts: WeatherForecast[];
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {  
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast2').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


interface WeatherForecast2 {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
