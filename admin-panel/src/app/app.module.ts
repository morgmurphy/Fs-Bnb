import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule} from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UserComponent } from './components/user/user.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { HomeComponent } from './components/home/home.component';
import { GraphDataService } from '../app/services/admin-panel/graph-data.service';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ListingsComponent } from './components/listings/listings.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UserComponent,
    ServiceProviderComponent,
    HomeComponent,
    BookingsComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GraphDataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
