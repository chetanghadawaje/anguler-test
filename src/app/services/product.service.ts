import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {}

  base_url = "https://fakestoreapi.com/"

  getProducts():Observable<any>{
    return this.httpClient.get(this.base_url + "products")
  }
}
