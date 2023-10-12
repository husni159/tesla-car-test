import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ProductListService } from './services/product-list.service';
import { CarService } from './services/car.service';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { CustomizationComponent } from './customization/customization.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { LowercaseHyphenPipe } from './lowercase-hyphen.pipe';
import { CapitalizePipe } from './capitalize.pipe'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProductListingComponent,
    CarDetailsComponent,
    NavigationComponent,
    CustomizationComponent,
    LowercaseHyphenPipe,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,    
    FormsModule,   
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [ProductListService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
