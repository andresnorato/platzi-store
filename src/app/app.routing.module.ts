import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AdminGuard } from "./admin.guard";
import { ContactComponent } from "./contact/contact.component";
import { LayoutComponent } from "./layout/layout.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
    {   
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {   
                path: 'products/:id',
                component: ProductDetailComponent
            },
            {
                path: 'contact',
                canActivate: [AdminGuard],
                component: ContactComponent
            },
        ]
    },
    {   
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes,{
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule{}