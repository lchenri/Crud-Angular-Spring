import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//rotas gerais do sistema
const routes: Routes = [
  //essa primeira rota já direciona direto para courses
  { path: '', pathMatch: 'full', redirectTo: 'courses'},
  {
    path: 'courses',        //o import é o do arquivo TS, e ./ é dentro do app
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
