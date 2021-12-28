import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  WeatherData: any; // variable qui récuperera les datas de l'API
  city: string ='london'; // Par défaut on affiche la température à londre

  public isTemp: boolean = false; // Booléen qui servira a changer la couleur de l'interface selon la température de la ville recherché

  constructor() { }

  ngOnInit(): void {
    this.getWeatherData(); // permet d'appeler la méthode à chaque instanciation de la classe
    console.log(this.WeatherData);
  }

  getWeatherData(): void{
    //recup donnée de l'API (simule l'appel d'une url et stock les données renvoyées par le serveur dans une variable (les données sont renvoyées sous format json))
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=edddbb4f6c19c4b4d525f69c2345d6e2`) // adresse de l'API ; ? signifie que l'on passe des paramétres à la route ; q est le nom du premier parametre ; ${nom_variable} sert a afficher une variable en ts ; & sépare les paramétres passer dans l'url ; appid est le nom du second paramétre auquel on affecte la clef secréte qui permet de savoir combien d'appel notre site va faire à l'API.
    .then(response=>response.json()) // fetch renvoie une promesse
    .then(data=>{this.setWeatherData(data);}) // Appel la fonction qui fixe les données (setWeatherData())
    // let data = JSON.parse('{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":285.03,"feels_like":284.36,"temp_min":284.09,"temp_max":285.68,"pressure":1021,"humidity":80},"visibility":10000,"wind":{"speed":6.76,"deg":240,"gust":15.1},"clouds":{"all":77},"dt":1636222982,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1636182179,"sunset":1636215918},"timezone":0,"id":2643743,"name":"London","cod":200}'); //Exemple de donnée en json renvoyé par l'API (pris dans la doc)
    // this.setWeatherData(data);
  }

  setWeatherData(data:any): void{
    //Affecter les données recus par l'API
    this.WeatherData = data;
    //Heure levé soleil
    let sunsetTime = new Date(this.WeatherData.sys.sunset *1000); //Info que l'api donne en milliseconde d'ou la multiplication par 1000
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString(); // On ajoute une nouvelle propriété à weatherData
    //Nuit ou jours?
    let todayDate = new Date();
    this.WeatherData.isDay = (todayDate.getTime() < sunsetTime.getTime()); //Si vrai jours sinon nuit
    //Gerer les temp° (calcul depuis les temp° en kelvin)
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    // Gére le boolean qui determine la couleur de fond
    if (this.WeatherData.temp_feels_like < 10 ){
      this.isTemp = false; //Il fait froid donc fond bleu (géré depuis le html)
    }else{
      this.isTemp = true; // Il fait chaud donc fond rouge(géré depuis le html)
    }
  }

  searchCity(): void { // Appeler lorsque l'on submit le form
    this.getWeatherData(); // Lancer l'appel à l'API
    console.log(this.WeatherData);
  }
}
