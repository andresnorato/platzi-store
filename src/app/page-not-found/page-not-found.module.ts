import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PageNotFoundRoutingModule } from "./page-not-found-rounting.module";



@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        PageNotFoundRoutingModule
    ]
})

export class PageNotFoundModule {

}
