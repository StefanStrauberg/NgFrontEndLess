import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, Observable, throwError } from "rxjs";

export interface Todo{
    id?: number,
    completed: boolean,
    title: string
}

@Injectable({providedIn: 'root'})
export class TodosService{
    constructor(private http: HttpClient){}

    fetchTodos(): Observable<Todo[]>{
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
        .pipe(delay(1000),
        catchError(error => {
            console.log('Error: ',error.message);
            return throwError(error);
        })
        );
    }
    
    addTodo(todo: Todo): Observable<Todo>{
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
    }

    removeTodo(id: number): Observable<void>{
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }

    completeTodo(id: number): Observable<Todo>{
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`,{ completed: true});
    }
}