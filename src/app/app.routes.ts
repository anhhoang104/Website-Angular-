import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/:id/edit', component: ProductEditComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];
