import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Task } from 'src/app/types/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item:Task={
    mission:"",
    date:new Date(),
    days:0,
  };
  constructor(private TodoService:TodoService) { }

  handleDelete(){
    this.TodoService.tasks=this.TodoService.tasks.filter(b=>b!==this.item)
  }

  ngOnInit(): void {
  }

}
