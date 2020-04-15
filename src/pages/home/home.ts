import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiPdvProvider } from '../../providers/api-pdv/api-pdv';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ApiPdvProvider
  ]
})
export class HomePage {

  listaItensCardapio: any = [];

  constructor(public navCtrl: NavController,
    public api: ApiPdvProvider) {

  }

  ionViewDidLoad(){
    this.api.getItens()
    .then((result: any) => {
      const objeto_retorno = result;
      this.listaItensCardapio = objeto_retorno;
      console.log(objeto_retorno);
    })
    .catch((error: any) => {
      console.log("Error no servidor: " + error);
    })
  }

  preencherCardapio(){

  }

}
