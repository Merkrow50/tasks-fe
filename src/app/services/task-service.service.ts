import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Task} from '../Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private endpoint = 'http://localhost:8080/v1/tasks'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Task[]>{
    return this.http.get<Task[]>(this.endpoint);
  }

  save(formdata: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.endpoint, formdata)
  }

}
