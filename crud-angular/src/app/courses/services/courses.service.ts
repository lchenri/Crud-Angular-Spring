import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root' //por causa desse root, temos que importar
  // o módulo httpclient no app.module, para evitar erros
})
export class CoursesService {
  //Como vamos obter as informações da API Java desenvolvida com spring, vamos fazer uma chamada
  //ajax, que é uma chamada assíncrona feita para o servidor.
  //No Angular, temos alguns métodos para fazer essa conexão, uma delas é o http client
  //No construtor, ocorre uma injeção de dependência

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      {_id: "1", name: "Angular", category: "front-end"},
      {_id: "2", name: "Spring", category: "Backend"},
    ];
  }
}
