import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component'
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ListingsComponent } from './components/listings/listings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashBoardComponent },
  { path: 'users', component: UserComponent },
  { path: 'service-providers', component: ServiceProviderComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'listings', component: ListingsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
