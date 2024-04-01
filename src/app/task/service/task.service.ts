import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { API_ENDPOINTS } from 'src/app/core/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

   getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}${API_ENDPOINTS.tasks}`);
  }

  getTaskById(id: number): Observable<Task> {
    const url = `${this.apiUrl}${API_ENDPOINTS.tasks}/${id}`;
    return this.http.get<Task>(url);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}${API_ENDPOINTS.tasks}`, task);
  }

  updateTask(task: Task): Observable<Task> {    
    const url = `${this.apiUrl}${API_ENDPOINTS.tasks}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(id: string): Observable<void> {
    const url = `${this.apiUrl}${API_ENDPOINTS.tasks}/${id}`;
    return this.http.delete<void>(url);
  }
}
