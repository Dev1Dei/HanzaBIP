import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChartComponent } from './chart/chart.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { ReportService } from './report.service';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ChartComponent,
    HomeViewComponent,
    LoginViewComponent,
    Dashboard1Component,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
