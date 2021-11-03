import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})
export class TodoInfoComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() deleteTodo = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(todo: Todo){
    this.deleteTodo.emit(todo);
  }
}
