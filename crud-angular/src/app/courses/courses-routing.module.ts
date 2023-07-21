import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

//Aqui nesse routes, meio que criamos uma referencia pro componente
//(nome do ts dentro do componente courses)
const routes: Routes = [
  {path: '', component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
