import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TasksHomeComponent } from './components/tasks-home/tasks-home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TasksHomeComponent, TaskListComponent, TaskItemComponent],
  imports: [CommonModule, TaskRoutingModule,SharedModule],
})
export class TaskModule {}
