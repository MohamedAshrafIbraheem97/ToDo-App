import { Component, Input, OnDestroy } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../service/task.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnDestroy {
  @Input() task!: Task;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private taskService: TaskService) { }

  toggleCompletion(): void {
    // Toggle the completion status of the task locally
    this.task.completed = !this.task.completed;
    
    // Call the task service to update the completion status on the server
    this.taskService.updateTask(this.task)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
