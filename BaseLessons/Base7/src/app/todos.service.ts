import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable } from "rxjs";

export interface Todo{
    id?: number,
    completed: boolean,
    title: string
}

@Injectable({providedIn: 'root'})
export class TodosService{
    constructor(private http: HttpClient){}

    addTodo(todo: Todo): Observable<Todo>{
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
      }
    
    fetchTodos(): Observable<Todo[]>{
       return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
        .pipe(delay(1000));
      }

    removeTodo(id: number): Observable<void>{
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
}