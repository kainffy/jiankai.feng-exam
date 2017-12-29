import { Component, OnInit } from '@angular/core';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {

  user: any = {
    id:Number(Math.random()*1000).toFixed(0),
    name:"Jack",
    email:"Jack",
    sex:"male"
  }
  constructor() { }

  ngOnInit() {
  }

}
