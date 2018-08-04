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
  courses: Observable<any>;
  course:any;
  currentGPA:any;
  targetGPA:any;
  studentNumber:string;
  selectedCourse:any;
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.courses = this.httpClient.get('https://courseprofile.secure.griffith.edu.au/service/student-course-json.php?profileId=82444');
    this.courses.subscribe(data => {
      console.log('my data: ', data);
    })
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
