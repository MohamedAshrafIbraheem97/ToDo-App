import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Task } from '../../models/task.model';
import { TaskService } from '../../service/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnDestroy {
  @Input() task!: Task;
  @Output() taskDeleted: EventEmitter<void> = new EventEmitter<void>();
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private taskService: TaskService,private toastr: ToastrService) { }

  toggleCompletion(): void {
    // Toggle completion status locally
    this.task.completed = !this.task.completed;
    // Update completion status on the server
    this.taskService.updateTask(this.task)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(data=>console.log(data)
      );
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.task.id!)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
         this.toastr.success('Task deleted successfully!', 'Success');
        // Emit event to notify parent component that task is deleted
        this.taskDeleted.emit();
      }, error => {
        this.toastr.error('Failed to delete task. Please try again.', 'Error');
        console.error('Error deleting task:', error);
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
