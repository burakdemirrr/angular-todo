import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Task } from '../types/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private TodoService: TodoService) { }
  entered: string = "";
  handleAdd() {
    this.TodoService.tasks.push({ mission: this.entered,date:new Date(),days:"15", });
    this.entered=""
  }

  getCard() {
    return this.TodoService.tasks;
  }

  ngOnInit(): void {
  }

}
