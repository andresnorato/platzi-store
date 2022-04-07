import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }

  products: Product[] = []

  ngOnInit(): void {
    this.fetchProducts();
  }


  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(rta =>{
      this.products = rta;
    })

  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
