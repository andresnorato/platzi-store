import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(
    private cartService:CartService
  ) {
    // this.cartService.cart$.pipe(
    //   map(produc                                                            )
    // )
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
