import { Injectable } from '@angular/core';
import { Task } from '../../Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskUrl = ' http://localhost:5000/tasks';

  constructor(private taskHttp: HttpClient) {}

  getTask(): Observable<Task[]> {
  return this.taskHttp.get<Task[]>(this.taskUrl)
  }
}
 