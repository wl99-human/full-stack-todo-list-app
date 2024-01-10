import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  executeHelloUserBeanServiceWithPathVariable(name: any) {
    return this.http.get<Todo>(`http://localhost:8080/hello-user/path-variable/${name}`);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
