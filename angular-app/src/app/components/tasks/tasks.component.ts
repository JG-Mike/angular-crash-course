import { Component , OnInit} from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/components/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  deleteTask(task: Task){
    
  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task) => (this.tasks = task));
  }
}

