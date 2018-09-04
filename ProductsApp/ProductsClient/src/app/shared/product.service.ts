import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = environment.backendUrl + "products/"
  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl, httpOptions);
  }
}
