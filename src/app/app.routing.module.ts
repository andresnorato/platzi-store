import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AdminGuard } from "./guard/admin.guard";
import { LayoutComponent } from "./layout/layout.component";
import { ProductDetailComponent } from "./product/components/product-detail/product-detail.component";
import { ProductsComponent } from "./product/components/products/products.component";

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
                loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
            },
            {
                path: 'contact',
                loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
            },
            {
                path: 'order',
                loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
            }
        ]
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {   
        path: '**',
        loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    }, 
];

@NgModule ({
    imports: [RouterModule.forRoot(routes,{
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule{}