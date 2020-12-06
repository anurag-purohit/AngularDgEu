import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { NewProductComponent } from './new-product/new-product.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
      { path: 'sales', component: SalesComponent },
      { path: 'products/add', component: NewProductComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
