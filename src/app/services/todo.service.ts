import { Injectable } from '@angular/core';
import { Task } from '../types/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasks:Task[]=[];

  constructor() { }
}
