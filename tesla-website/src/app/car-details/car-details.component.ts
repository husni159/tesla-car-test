import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../services/product-list.service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  car: any = {}; // Initialize with an empty object
  selectedColor: string = ''; // Add the selectedColor property

  constructor(private route: ActivatedRoute,  private router: Router, private ProductListService: ProductListService, private CarService: CarService) {}

  ngOnInit(): void {
    // Get the car details from a service or API based on the route parameter
    this.route.params.subscribe((params) => {
      const carId = params['id']; // car ID as a route parameter
      // console.log(carId)
      this.getProductDetails(carId);
    });
  }
  getProductDetails(carId : number) {
    this.ProductListService.getCarDetails(carId).subscribe((res: any) => {
      this.car = res;
      this.car.video = "assets/model-s.webm";
      console.log(this.car.configuration)
    });
  }
  navigateToCustomization() {
    if (this.car && this.car.id) {
      // Navigate to the customization page with the car's ID as a parameter
      this.router.navigate(['/customization', this.car.id]);
    } else {
      console.error('Car ID is missing or undefined.');
    }
  }

  selectColor(model_path :any,color :any) {
    this.car.image_path = 'assets/'+model_path+'-'+color+'.jpg'
    console.log(this.car)
  }

   // Add a method to convert the car model to lowercase with hyphens
   getLowercaseModel(): string {
    return this.car.model ? this.car.model.toLowerCase().replace(/\s+/g, '-') : '';
  }

  getConfigKeys(): string[] {
    return this.car.configuration ? Object.keys(this.car.configuration) : [];
  }  
}
