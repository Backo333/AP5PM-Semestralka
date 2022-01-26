import { Component } from '@angular/core';
import {WeatherService} from '../api/weather.service';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myinput:String = ''
  Teplota:String = ''
  PocTeplota:String = ''
  Lokacia:String = ''
  Vietor:String  = ''
  SmerVetra:String = ''
  Oblacnost:String = ''
  Cas:String = ''
  Tlak:String = ''
  Viditelnost:String = ''
  KEY_HISTORY = "search_history"
  

constructor(private weatherService: WeatherService) 
{
  this.weatherService.getWeather("").subscribe( (data) => 
  {
  this.Teplota = data['current']['temp_c'];
  this.PocTeplota = data['current']['feelslike_c'];
  this.Vietor = data['current']['wind_kph'];
  this.SmerVetra = data['current']['wind_dir'];
  this.Oblacnost = data['current']['cloud'];
  this.Tlak = data['current']['pressure_in'];
  this.Viditelnost = data['current']['vis_km'];
  this.Lokacia = data['location']['country'];
  console.log(data)
  });
  }

  
  public async btnClicked()
{
this.weatherService.getWeather(this.myinput).subscribe( (data) => 
{
this.Teplota = data['current']['temp_c'];
this.PocTeplota = data['current']['feelslike_c'];
this.Vietor = data['current']['wind_kph'];
this.SmerVetra = data['current']['wind_dir'];
this.Oblacnost = data['current']['cloud'];
this.Tlak = data['current']['pressure_in'];
this.Viditelnost = data['current']['vis_km'];
this.Lokacia = data['location']['country'];
console.log(data)
});

var entry = { "input": this.myinput};
var history = JSON.parse((await Storage.get({key: this.KEY_HISTORY})).value);

if (history == null) {
  history = [];
}
history.unshift(entry)
await Storage.set({
  key: this.KEY_HISTORY,
  value: JSON.stringify(history),
});
}
} 
