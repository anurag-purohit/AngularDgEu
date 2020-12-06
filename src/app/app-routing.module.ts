import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { NewProductComponent } from './new-product/new-product.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './security/login/login.component';
import { AuthGuard } from './security/auth.guard';


const routes: Routes = [
      { path: 'login',
       component: LoginComponent },
      { path: 'sales',
       component: SalesComponent,
        canActivate: [AuthGuard]},
      { path: 'products/add',
       component: NewProductComponent,
        canActivate: [AuthGuard]},
      { path: 'welcome',
       component: WelcomeComponent,
        canActivate: [AuthGuard]},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
