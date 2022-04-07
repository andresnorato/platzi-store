import { NgModule } from "@angular/core";
import { ContactComponent } from "./componentes/contact.component";
import { ContactRoutingModule } from "./contact-routing.module";


@NgModule({
    declarations: [
        ContactComponent
    ], 
    imports: [
        ContactRoutingModule
    ]
})

export class ContactModule {}