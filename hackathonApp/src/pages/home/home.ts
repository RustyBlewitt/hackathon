import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { CoursePage } from '../course/course';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  programList = [
    {
       CourseCode: '1014SCG',
       CourseName: 'Statistics',
       Profile: '101399'
    },
    {
       CourseCode: '1010ENG',
       CourseName: 'Engineering Maths 2',
       Profile: '101973'
    },
    {
       CourseCode: '1801ICT',
       CourseName: 'Programming Languages',
       Profile: '101844'
    },
    {
       CourseCode: '1808ICT',
       CourseName: 'Discrete Structures',
       Profile: '99893'
    }
  ];
  courses: Observable<any>;
  course:any;
  currentGPA:any;
  targetGPA:any;
  studentNumber:string;
  selectedCourse:any;
  courseProfile = 82444;
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    for (let i = 0;i<4;i++){
      console.log(this.programList[i].Profile);
      this.courses = this.httpClient.get('https://courseprofile.secure.griffith.edu.au/service/student-course-json.php?profileId=' + this.programList[i].Profile);
      this.courses.subscribe(data => {
        console.log('my data: ', data.assessment_plan);
      })
    }

  }
  pullClasses(){
    if (this.currentGPA >= this.targetGPA || this.currentGPA > 7 || this.targetGPA > 7){
        alert("Invalid information");
    }
    else{
      this.navCtrl.push(CoursePage, {course: this.course, currentGPA: this.currentGPA, studentNumber: this.studentNumber});
    }


  }
}
