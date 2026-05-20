import { Injectable } from '@angular/core';
import { APIENDPOINTS } from '../../core/enums/apiEndPoints';
import { HttpClient } from '@angular/common/http';
import { carDetails } from '../../models/post-cars';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiendpoints = APIENDPOINTS

  constructor(private http: HttpClient) { }

  addCarDetails(payload: carDetails) {
    const url = this.apiendpoints.admin.POST_CARD_DETAILS;
    return this.http.post(url, payload);
  }

  getAllCarDetailsData() {
    const url = this.apiendpoints.admin.GET_ALL_CAR_DETAILS;
    return this.http.get(url);
  }

  deleteCarDetails(id: number) {
    const url = `${this.apiendpoints.admin.DELETE_CAR_DETAILS}/${id}`;
    return this.http.delete(url);
  }


  getSingleCarDetails(id: number) {
    const url = `${this.apiendpoints.admin.GET_ALL_CAR_DETAILS}/${id}`;
    return this.http.get(url);
  }

  updateCarDetails(id: number, payload: carDetails) {
    const url = `${this.apiendpoints.admin.UPDATE_CAR_DETAILS}/${id}`;
    return this.http.put(url, payload);
  }

  getHistoryOfBookedCars() {
    const url = this.apiendpoints.admin.HISTORY_OF_BOOKED_CARS;
    return this.http.get(url);
  }

  changestatusOfBooking(id: number, status: string) {
    const url = `${this.apiendpoints.admin.CHANGE_BOOKING_STATUS}/${id}/${status}`;
    return this.http.get(url);
  }
}
