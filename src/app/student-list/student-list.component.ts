import { Component, OnInit } from '@angular/core';

interface Student {
  id: number,
  name: string,
  email: string,
  sex: string
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Array<Student>;
  selectedStudent: number;
  selectedCol:string
  orderState:any={
    id: false,
    name: false,
    email: false,
    sex: false,
  };
  constructor() {
    this.loadStudents();
  }

  sortStudents(col,type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    console.log("sortstudents Works!");
    this.selectedCol = col;
    this.orderState[col] = !this.orderState[col];
    this.students.sort(function (a, b) {
      let value1:any;
      let value2:any;
      if (col == 'id') {
        value1 = a.id.toString();
        value2 = b.id.toString();
      } else if (col == 'name') {
        value1 = a.name;
        value2 = b.name;
      } else if (col == 'email') {
        value1 = a.email;
        value2 = b.email;
      } else if (col == 'sex') {
        value1 = a.sex;
        value2 = b.sex;
      }
      if (type) {
        return value1.localeCompare(value2);
      } else {
        return value2.localeCompare(value1);
      }
    });
  }
  randomSortStudents() {
    this.students.sort(function (a, b) {
      return Math.random() > 0.5 ? -1 : 1;;
    });
  }
  loadStudents(){
    this.students = [
      {id: 1, name: "刘一", email: "liuyi@hotmail.com", sex:"male"},
      {id: 2, name: "陈二", email: "chener@hotmail.com", sex:"male"},
      {id: 3, name: "张三", email: "zhangsan@hotmail.com", sex:"female"},
      {id: 4, name: "李四", email: "lisi@hotmail.com", sex:"male"},
      {id: 5, name: "王五", email: "wangwu@hotmail.com", sex:"female"},
    ];
  }
  selectStudent(id:number){
    console.log(id);
    this.selectedStudent = id;
  }
  addStudent(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser: Student = {
      id:Number(uuid),
      name:"Jack",
      email:"Jack",
      sex:"male"
    }
    this.students.push(newUser);
  }
  deleteStudent(){
    console.log(this.selectedStudent);
    this.students.forEach((student,index,arr)=>{
      if(student.id == this.selectedStudent){
        arr.splice(index,1);
      }
    })
    this.selectedStudent = -1;
  }

  ngOnInit() {
  }

}
