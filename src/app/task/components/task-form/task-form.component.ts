import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../service/task.service';
import { Subject, takeUntil } from 'rxjs';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output() taskAdded: EventEmitter<any> = new EventEmitter();
  private unsubscribe$: Subject<void> = new Subject<void>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService:TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }
  addTask(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: undefined, // Initialize with undefined
        title: this.taskForm.get('title')?.value,
        description: this.taskForm.get('description')?.value,
        completed: false
      };

      this.taskService.createTask(newTask)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((createdTask: Task) => {
          newTask.id = createdTask.id; // Replace undefined with the actual ID
          this.taskAdded.emit(this.taskForm.value);
          this.taskForm.reset();
        });
    }
  }
}
