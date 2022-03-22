import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Todo {
  complited: boolean,
  title: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  todos: Todo[] = [];

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts?_limit=2')
      .subscribe(response => {
        console.log('Response', response);
        this.todos = response;
      });
  }
}
