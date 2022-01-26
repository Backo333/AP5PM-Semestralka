import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeather(text: String) 
{
if (text.length === 0)
{
text = 'Zlín'
}
return this.http.get('https://api.weatherapi.com/v1/current.json?key=770217920e53414d85e193006222401&q='+text+'&aqi=no');
}
}