import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private url = 'http://127.0.0.1:8000/api/cars/';
  
  constructor(private httpClient: HttpClient) {}
  getProducts(page: number) {
    return this.httpClient.get(this.url + '?page=' + page);
  }
  getCarDetails(id: number) {
    return this.httpClient.get(this.url + id);
  }

}
