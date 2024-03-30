import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TasksHomeComponent } from './components/tasks-home/tasks-home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskComponent } from './service/task/task.component';


@NgModule({
  declarations: [
    TasksHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
