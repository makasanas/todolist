import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public newTask = "";
  public error = false;
  public tasks = [
    {
      task: "Start work for kevin",
      type: false
    },
    {
      task: "Take some food for friends",
      type: true
    },
    {
      task: "Work need to be push",
      type: false
    }
  ];



  constructor() { }

  ngOnInit() {
  }

  addItem(task) {
    if (task.length > 1) {
      this.tasks.push({
        task: task,
        type: false
      })
      this.error = false;
    } else {
      this.error = true;
    }
  }
}
