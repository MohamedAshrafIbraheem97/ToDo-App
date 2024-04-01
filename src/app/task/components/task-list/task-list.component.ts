import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadTasks(): void {
    this.taskService.getTasks()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  onTaskDeleted(): void {
    // Refresh task list when a task is deleted
    this.loadTasks();
  }
  onTaskAdded(newTask: Task) {
    // call the load tasks so we can get the new updated tasks list with id of the last added task
    this.loadTasks();
  }
}
