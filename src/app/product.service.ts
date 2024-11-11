import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API}/products`);
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API}/products/${id}`);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/products/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API}/products`, product);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      `${this.API}/products/${product.id}`,
      product
    );
  }
}
