import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public allTodos!: Todo[]; // les todos sont déclarer ici et passé au enfants via la directive @input

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addToDo(form : any) {
    //console.log(form.value);
    this.todoService.createTodo(form.value); // Appel la methode createTodo du service.
    form.reset(); //vide les champs du formulaire une fois le submit triggered.
    this.allTodos = this.todoService.getTodos(); // Rafraichie la liste afficher
  }

}
