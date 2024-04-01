# Angular Task Management Application

This is a simple Angular application for managing tasks. It allows users to view, add, update, and delete tasks.

## Features

- Display a list of tasks
- Add a new task
- Update an existing task
- Delete a task

## Supported development features
- Used lazy loading (so it will be open for expansion)
- more useable folder strcture (for easier development and to apply single responsibility)
- bootstrap for faster development and good UI

## Technologies Used

- Angular
- Angular CLI 15.0.0
- Bootstrap
- Font Awesome
- ngx toastr

## Getting Started

1. Clone the repository:
git clone <repository-url>
cd angular-task-management

2. Install dependencies:
npm install

3. Run the development server:
ng serve

4. Open your browser and visit `http://localhost:4200` to view the application.

5. Run the backend server on another terminal
json-server src/assets/db.json --port 3000

## Folder Structure
```
src/
│
├── app/
│   ├── core/
│   │   ├── interceptors/
│   │   │   └── error.interceptor.ts
│   │   └── api-endpoints.ts
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   └── footer.component.ts
│   │   │   ├── header/
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   └── header.component.ts
│   │   │   └── placeholder/
│   │   │       ├── placeholder.component.html
│   │   │       ├── placeholder.component.scss
│   │   │       └── placeholder.component.ts
│   │   └── ...
│   │
│   ├── task/
│   │   ├── components/
│   │   │   ├── task-form/
│   │   │   │   ├── task-form.component.html
│   │   │   │   ├── task-form.component.scss
│   │   │   │   └── task-form.component.ts
│   │   │   ├── task-item/
│   │   │   │   ├── task-item.component.html
│   │   │   │   ├── task-item.component.scss
│   │   │   │   └── task-item.component.ts
│   │   │   └── task-list/
│   │   │       ├── task-list.component.html
│   │   │       ├── task-list.component.scss
│   │   │       └── task-list.component.ts
│   │   │
│   │   ├── models/
│   │   │   └── task.model.ts
│   │   │
│   │   └── services/
│   │       └── task.service.ts
│   │
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.module.ts
│   └── ...
│
├── assets/
│   └── db.json (local server)
│
├── environments/
│   ├── environment.prod.ts
│   └── environment.development.ts
│
└── ...
```






