import { Injectable } from '@angular/core';
import { APIENDPOINTS } from '../../core/enums/apiEndPoints';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiendpoints = APIENDPOINTS

  constructor(private http: HttpClient) { }

  getAllCarDetails(){
    return this.http.get(this.apiendpoints.customer.GET_ALL_CAR_DETAILS)
  }

  getCarDetailsById(carId: string){
    const url = this.apiendpoints.customer.GET_CAR_DETAILS_BY_ID+`/${carId}`;
    return this.http.get(url);
  }

  bookCar(payload:any){
    const url = this.apiendpoints.customer.BOOK_CAR;
    return this.http.post(url,payload);
  }

  getMyBookingHistory(id: string){
    const url = this.apiendpoints.customer.MY_BOOKING_HISTORY+`/${id}`;
    return this.http.get(url);
  }

}
