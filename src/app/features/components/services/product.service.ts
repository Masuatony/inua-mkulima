import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url = 'https://dummyjson.com/products'
  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<any> {
  return this.http.get<any>(this.url);
  }

}
