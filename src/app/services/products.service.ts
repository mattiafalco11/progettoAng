import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProductsResponse, Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<GetProductsResponse>{
    return this.http.get<GetProductsResponse>("https://dummyjson.com/products");
  }
}
