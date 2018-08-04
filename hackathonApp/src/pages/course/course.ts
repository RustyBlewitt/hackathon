import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  public currentCourse;
  public currentGPA;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentCourse = this.navParams.get('course');
    this.currentGPA = this.navParams.get('currentGPA');
    console.log("----");
    console.log(this.currentCourse);
  }
  addNewCourse(){
    let CourseName = prompt('Enter Course Name');
    let CourseCode= prompt('Enter Course Code');
    this.courseList.push({
      CourseName: CourseName,
      CourseCode: CourseCode
  });
  }
  ionViewDidLoad() {
      alert(this.currentGPA);
  }
  courseList = [
    {
      CourseName: '1',
      CourseCode: '0411016221'
    },
    {
      CourseName: '2',
      CourseCode: '0416016883'
    },
    {
      CourseName: '3',
      CourseCode: '0410933400'
    },
    {
      CourseName: '4',
      CourseCode: '0499551321'
    }
  ];

  
}
