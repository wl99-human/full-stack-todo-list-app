import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public status: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn Angular 17', false, new Date()),
    new Todo(2, 'Become Java Spring Expert', false, new Date()),
    new Todo(3, 'Develop microservices', false, new Date()),
    new Todo(4, 'Become a full stack developer', false, new Date())
    // {id: 1, description: 'Learn Angular 17'},
    // {id: 2, description: 'Become Java Spring Expert'},
    // {id: 3, description: 'Develop microservices'}
  ]

  constructor() { }

  ngOnInit() {
  }

}