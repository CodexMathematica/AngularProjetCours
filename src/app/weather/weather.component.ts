import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  WeatherData:any;
  city:string ='london';

  @Input() isTemp: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    //recup donnée de l'API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=edddbb4f6c19c4b4d525f69c2345d6e2`)
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
    // let data = JSON.parse('{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":285.03,"feels_like":284.36,"temp_min":284.09,"temp_max":285.68,"pressure":1021,"humidity":80},"visibility":10000,"wind":{"speed":6.76,"deg":240,"gust":15.1},"clouds":{"all":77},"dt":1636222982,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1636182179,"sunset":1636215918},"timezone":0,"id":2643743,"name":"London","cod":200}');
    // this.setWeatherData(data);
  }

  setWeatherData(data:any){
    this.WeatherData = data;
    //affecter les données du get
    this.WeatherData = data;
    //heure levé soleil
    let sunsetTime = new Date(this.WeatherData.sys.sunset *1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString();
    //Nuit ou jours?
    let todayDate = new Date();
    this.WeatherData.isDay = (todayDate.getTime() < sunsetTime.getTime());
    //Gerer les temp°
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    // gerer boolean qui determine la couleur de fond
    if (this.WeatherData.temp_feels_like < 10 ){
      this.isTemp = false;
    }else{
      this.isTemp = true;
    }
  }

  searchCity() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }
}
