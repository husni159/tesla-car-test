import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carDetails: any = {}; 

  setCarDetails(details: any) {
    console.log('set car details:',details)
    this.carDetails = details;
  }

}
