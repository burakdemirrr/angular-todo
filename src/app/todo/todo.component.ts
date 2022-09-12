import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Task } from '../types/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private TodoService: TodoService) {}
  entered: string = "";
  days: number = 0;

  handleAdd() {
    if(this.days>0){
      this.TodoService.tasks.push({ mission: this.entered, date: new Date(), days: this.days });
      this.entered = ""
      this.days = 0; }
      else{
        alert("Please enter days")
      }
  }

  getCard() {
    return this.TodoService.tasks;
  }


  ngOnInit(): void {
  }
}
