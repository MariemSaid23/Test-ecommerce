import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {path:'' ,
  canActivate:[authGuard],
  loadComponent:()=>import("./layouts/blank-layout/blank-layout.component").then((m)=>m.BlankLayoutComponent)
,children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadComponent:()=>import('./Components/home/home.component').then((m)=>m.HomeComponent),title:'Home'},
  {path:'cart',loadComponent:()=>import("./Components/cart/cart.component").then((m)=>m.CartComponent),title:"Cart"},
  {path:'products',loadComponent:()=>import("./Components/products/products.component").then((m)=>m.ProductsComponent),title:"Products"},
  {path:'productdetails/:id',loadComponent:()=>import("./Components/details/details.component").then((m)=>m.DetailsComponent),title:"productdetails"},
  {path:'brands',loadComponent:()=>import("./Components/brands/brands.component").then((m)=>m.BrandsComponent),title:"Brands"},
  {path:'categories',loadComponent:()=>import("./Components/categories/categories.component").then((m)=>m.CategoriesComponent),title:"Categories"},
 


]},
{path:'',loadComponent:()=>import("./layouts/auth-layout/auth-layout.component").then((m)=>m.AuthLayoutComponent),

children:[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadComponent:()=>import('./Components/login/login.component').then((m)=>m.LoginComponent),title:'Login'}
,{path:'register',loadComponent:()=>import('./Components/register/register.component').then((m)=>m.RegisterComponent),title:'Register'}
]
},
{path:'**',loadComponent:()=>import('./Components/notfound/notfound.component').then((m)=>m.NotfoundComponent),title:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
