import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductsService } from '../../../core/services/products/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const {id} = params;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(rta =>{
      this.product = rta
    })
  }

  createProduct(){
    this.productsService.createProduct({
        "id": "2",
        "image": "assets/images/mug.png",
        "title": "Hoodie",
        "price": 5555,
        "description": "Producto creado desde el componente"
    })
    .subscribe(product =>{
      console.log(product)
    })
  }


  updateProduct(){
    this.productsService.updateProduct('123231', {"id": "1", "title": "Camiseta"})
    .subscribe(rta =>{
      console.log(rta)
    })
  }

  deleteProduct(){
    this.productsService.deteleProduct('')
    .subscribe(rta =>{
      console.log(rta)
    })
  }

}
