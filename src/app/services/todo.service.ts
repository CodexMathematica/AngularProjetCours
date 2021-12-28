import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos :Todo[] = [];

  constructor() { }

  createTodo(todo : Todo) {
    const newTodo = {id: Date.now(), ...todo}; // A faire après avoir créer le modele
    // on ajoute notre techo au début de la liste de technos
    this.todos = [newTodo, ...this.todos]; // avant ajout du modele : this.todos = [todo, ...this.todos];
    console.log(this.todos);
  }

  getTodos(): Todo[]{
    return this.todos;
  }

  deleteTodos(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id); // Créer un tableau qui contient tous les id sauf celui passé en argument
  }
}
