import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Course } from '../model/course';
import { Observable, delay, first, take } from 'rxjs';

@Injectable({
  providedIn: 'root' //por causa desse root, temos que importar
  // o módulo httpclient no app.module, para evitar erros
})
export class CoursesService {
  //Como vamos obter as informações da API Java desenvolvida com spring, vamos fazer uma chamada
  //ajax, que é uma chamada assíncrona feita para o servidor.
  //No Angular, temos alguns métodos para fazer essa conexão, uma delas é o http client
  //No construtor, ocorre uma injeção de dependência

  private readonly API = 'api/courses'

  constructor(private httpClient: HttpClient) { }

  list() { //como o list retorna um observable, o operador de <> tipa o que
    // será retornado
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      //delay(5000),
      first(), // *pega os dados uma vez apenas do servidor*
      //tap(courses => console.log(courses))
      );
  }
}
