import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'success', component: SuccessComponent},
  {path:'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
