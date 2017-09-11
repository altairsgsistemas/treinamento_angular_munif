import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChurrascoService {

  errorHandler = error => console.error('ChurrascoService error', error);
  private baseUrl = 'https://treinamento-angular-munif.firebaseio.com/';
  private collection = 'lista';

  constructor(private http: Http) { }

  addItem(item) {
    const json = JSON.stringify(item);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getLista() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeItem(item) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${item.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateItem(item) {
    const json = JSON.stringify({
      descricao: item.descricao,
      quantidade: item.quantidade
    });
    return this.http.patch(`${this.baseUrl}/${this.collection}/${item.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        descricao: parsedResponse[id].descricao,
        quantidade: parsedResponse[id].quantidade
      }))
      .sort((a, b) => a.descricao.localeCompare(b.descricao));
  }

}
