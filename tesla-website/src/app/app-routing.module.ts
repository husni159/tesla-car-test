import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component'; // Import the landing component
import { ProductListingComponent } from './product-listing/product-listing.component'; // Import the landing component
import { CarDetailsComponent } from './car-details/car-details.component'; // Import the landing component
import { CustomizationComponent } from './customization/customization.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent }, 
  { path: 'product-listing', component: ProductListingComponent },
  { path: 'car-details/:id', component: CarDetailsComponent },
  { path: 'customization/:id', component: CustomizationComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppRoutingModule {}
