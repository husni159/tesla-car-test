import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css'],
})
export class CustomizationComponent implements OnInit {
  car: any = {};
  selectedColor: string = '';
  selectedFeature: string = '';
  feature: string = 'feature'

  constructor(private route: ActivatedRoute, private router: Router, private ProductListService: ProductListService) {} // Inject Router

  ngOnInit(): void {
    // Get the car details from a service or API based on the route parameter
    this.route.params.subscribe((params) => {
      const carId = params['id']; // car ID as a route parameter
      this.getProductDetails(carId);
    });
  }


  proceedToPurchase() {
    // Implement the logic to proceed to the purchase page
  }
  getProductDetails(carId : number) {
    this.ProductListService.getCarDetails(carId).subscribe((res: any) => {
      this.car = res;
      this.car.video = "assets/model-s.webm";
      console.log('getProductDetails :-->', this.car)
    });
  }
}
