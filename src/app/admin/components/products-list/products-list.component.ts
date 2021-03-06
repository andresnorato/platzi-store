import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products =>{
      this.products = products;
    });
  }


  deleteProduct(id: string){
    this.productsService.deteleProduct(id)
    .subscribe(rta =>{
      if(rta){
         this.products = this.products.filter(product => product.id !== id)
      }else{
        console.log('No se pudo eliminar tu item')
      }
    }) 
  }
}
