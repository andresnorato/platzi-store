import { NgModule } from "@angular/core";
import { CartRoutingModule } from "./cart-routing.module";
import { CartComponent } from "./components/cart/cart.component";


@NgModule({
    declarations: [
        CartComponent
    ], 
    imports: [
        CartRoutingModule
    ]
})

export class CartModule {}