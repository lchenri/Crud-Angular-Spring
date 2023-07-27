import { Component } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  //geralmente é feita a tipagem quando não iniciamos a variável!
  courses: Course[] = [
    {_id: "1", name: "Angular", category: "front-end"}
  ];
  displayedColumns = ['name', 'category'];
}
