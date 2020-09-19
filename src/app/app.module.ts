import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ServicesService } from './services.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';


const appRoutes: Routes = [
  { path : '' , redirectTo : '/dashboard' , pathMatch:'full' },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavComponent,
    DetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
