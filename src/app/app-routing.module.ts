import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
 {path: '', component: HomeViewComponent},
 {path: 'login', component: LoginViewComponent},
 {path: 'dashboard/:id', component: Dashboard1Component},
 {path: 'slideshow', component: SlideshowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
