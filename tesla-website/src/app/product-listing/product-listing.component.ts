
import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  showTooltip = false;
  cars: any[] = []; // Array to store fetched car data
  filteredCars: any[] = []; // Array to store filtered car data
  searchText: string = '';
  selectedFilter: string = 'all';
  // Pagination properties
  itemsPerPage: number = 6; // Items per page
  pagination: number = 1;
  totalCars: number = 0;
  allCarModels : any = [];
  constructor(private ProductListService: ProductListService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.ProductListService.getProducts(this.pagination).subscribe((res: any) => {
      this.cars = res.results;
      this.totalCars = res.count;
      // Initialize filteredCars with all cars
      this.filteredCars = this.cars;
      this.allCarModels = Object.values(this.filteredCars).map(carmodel => carmodel.model);
    });
  }
  // Filter cars based on search text
  searchCars() {
    this.filteredCars = this.cars.filter(car =>
      car.model.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Filter cars based on selected filter
  filterCars() {
    if (this.selectedFilter === 'all') {
      this.filteredCars = this.cars;
    } else {
      this.filteredCars = this.cars.filter(car => car.model === this.selectedFilter);
    }
  }
  renderPage(event: number) {
    console.log(event)
    this.pagination = event;
    this.getProducts();
  }

}
