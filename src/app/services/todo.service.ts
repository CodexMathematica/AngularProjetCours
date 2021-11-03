import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos :any[] = [];

  constructor() { }

  createTodo(todo : any) {
    const newTodo = {id: Date.now(), ...todo};
    this.todos = [newTodo, ...this.todos];
    console.log(this.todos);
  }

}
