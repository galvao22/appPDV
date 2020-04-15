import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiPdvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiPdvProvider {

  url: string = "http://localhost:3000";

  constructor(public http: HttpClient) {
    console.log('Hello ApiPdvProvider Provider');
  }

  getItens(){
    const urlTodosItens = `${this.url}/itens/itens`;
    console.log("Metodo POST - buscar todos os itens");
    return new Promise((resolve, reject) => {
      var data = {

      };
      this.http.post(urlTodosItens, data).subscribe((result: any) => {
        resolve(result);
        console.log("requisição feita")
      },
      (error) => {
        reject (error.json());
        console.log(error);
      });
    });
  }

}
