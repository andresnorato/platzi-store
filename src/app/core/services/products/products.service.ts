import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(
    private http: HttpClient
    ) { }
    
  
  getAllProducts(){
    return this.http.get<Product[]>(`${environment.url_api}products`);
  }


  getProduct(id: string){
    return this.http.get<Product>(`${environment.url_api}products/${id}`);
  }

  createProduct(product: Product){
    return this.http.post<Product>(`${environment.url_api}products`, product)
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put<Product>(`${environment.url_api}products/${id}`, changes);
  }

  deteleProduct(id: string){
    return this.http.delete(`${environment.url_api}products/${id}`);
  }


}
  