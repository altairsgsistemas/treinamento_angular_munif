import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaProvider } from '../../providers/lista/lista'

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  lista;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lp: ListaProvider) {
    lp.conecta();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  ngOnInit() {
    this.atualizar();
    console.log(this.lista);
  }

  atualizar() {
    this.lista = this.lp.getAll();
    console.log("atualizar: " );
  }

  itemSelected(item){
    this.lp.alterando=true;
    this.lp.selecionado=JSON.parse(JSON.stringify(item));
    this.lp.selecionado[ '$key' ] = item.$key;
    this.navCtrl.parent.select(1); 
  }

  itemUpdated(item) {
    this.lp.update(item);
  }

  novo(){

  }

  excluir(obj){
    this.lp.delete(obj.$key);
    this.atualizar();
  }

  editar(obj){

  }

}
