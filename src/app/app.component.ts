import { Component } from '@angular/core';

@Component({ //Décorateur qui indique à angular que la classe TypeScript en dessous est un composant 
  selector: 'app-root', //Sert à insérer le composant app depuis le code html <app-root></app-root>
  templateUrl: './app.component.html', //Indique le chemin du code html
  styleUrls: ['./app.component.css'] // Indique le chemin du code css
})
export class AppComponent { // Classe qui correspond à un composant
  title = 'Découvrir Angular';
}
