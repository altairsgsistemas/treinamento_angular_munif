import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SobrePage } from '../sobre/sobre';
import { ProdutosPage } from '../produtos/produtos';
import { ClientesPage } from '../clientes/clientes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tabHome = HomePage;
  tabSobre = SobrePage;
  tabProdutos = ProdutosPage;
  tabClientes = ClientesPage;

  constructor() {

  }
}
