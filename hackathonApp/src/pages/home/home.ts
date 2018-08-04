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
  selectedCourse:any;
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.courses = this.httpClient.get('https://degrees.griffith.edu.au/rest-api/v3/Program/1534');
    this.courses.subscribe(data => {
      console.log('my data: ', data);
    })
  }
  pullClasses(){
    this.selectedCourse = this.course;
    console.log(this.selectedCourse);
      this.navCtrl.push(CoursePage, this.selectedCourse);
  }
}
