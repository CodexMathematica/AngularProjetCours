//Ici ce trouvera la logique en TypeScript pour le composant home qui en l'occurence n'en a pas 
import { Component, OnInit } from '@angular/core'; // Les imports ce font depuis un fichier se trouvant dans le dossier node_modules (fichier qui regroupe les dépendances du projet (voir le package.json pour connaitre les versions de chaque dépendance du projet))

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { } // Premiere methode appelée lors de l'instanciation de la class.

  ngOnInit(): void { // Seconde methode appelée lors de l'instanciation de la class.
  }

}
