import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';

//Aqui nesse routes, meio que criamos uma referencia pro componente
//(nome do ts dentro do componente courses)
const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'new', component: CourseFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
