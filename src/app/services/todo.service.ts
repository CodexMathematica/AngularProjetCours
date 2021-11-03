import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos :Todo[] = [];

  constructor() { }

  createTodo(todo : Todo) {
    const newTodo = {id: Date.now(), ...todo};
    this.todos = [newTodo, ...this.todos];
    console.log(this.todos);
  }

  getTodos(): Todo[]{
    return this.todos;
  }

}
