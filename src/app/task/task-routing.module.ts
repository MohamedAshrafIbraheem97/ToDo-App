import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksHomeComponent } from './components/tasks-home/tasks-home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

const routes: Routes = [
  {
    path: '',
    component: TasksHomeComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: TaskListComponent },
      { path: 'item/:id', component: TaskItemComponent },
      // Additional routes can be added as needed
    ]
  },
  // Additional routes for the task management module can be added here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
