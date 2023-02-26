import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  reviewList: any;

  constructor() { }

  storeDataReview(data: any): void {
    this.reviewList = data;
  }

  get reviews() {
    return this.reviewList;
  }
}
