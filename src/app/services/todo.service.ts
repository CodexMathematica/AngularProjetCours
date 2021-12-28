// Les services servent à regrouper les methodes utiles que l'on est suceptible d'utiliser dans plusieurs composants.Au final cela permet de ne pas avoir le même code doublé ou triplé à différents niveaux de l'application (ça facilite donc la maintenance, la lisibilité et la stabilité du code)(code DRY).
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService { //export car on veut importer la classe dans chaque fichier ts ou elle est utile.

  private todos :Todo[] = []; // Attribut en private car utilisé et utilisable uniquement dans ce fichier.

  constructor() { }

  createTodo(todo : Todo): void {
    //Cette constante est une constante intermédiaire qui permet l'ajout de l'id sur la todo.
    const newTodo = {id: Date.now(), ...todo}; // Cette ligne doit donc être ajoutée après avoir créé le modele qui contient un id pour chaque todo basé sur la date
    // on ajoute notre todo au début de la liste de todos
    this.todos = [newTodo, ...this.todos]; // Avant ajout du modele on utilise : this.todos = [todo, ...this.todos];
    console.log(this.todos); // Les console.log servent à nous debugguer à l'aide de la console (F12 depuis un navigateur)
  }

  getTodos(): Todo[]{
    return this.todos;
  }

  deleteTodos(todo: Todo): void {
    this.todos = this.todos.filter(t => t.id !== todo.id); // Créer un tableau qui contient tous les id sauf celui passé en argument
  }
}
