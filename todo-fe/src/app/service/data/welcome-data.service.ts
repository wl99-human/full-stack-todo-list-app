import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloUserBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloUserBeanService() {
    return this.http.get<HelloUserBean>('http://localhost:8080/hello-user-bean');
  }

  executeHelloUserBeanServiceWithPathVariable(name: any) {
    return this.http.get<HelloUserBean>(`http://localhost:8080/hello-user/path-variable/${name}`);
  }
}
