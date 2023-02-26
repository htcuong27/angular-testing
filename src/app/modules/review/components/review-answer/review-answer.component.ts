import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review-answer',
  templateUrl: './review-answer.component.html',
  styleUrls: ['./review-answer.component.scss'],
})
export class ReviewAnswerComponent implements OnInit {
  dataReviews: any;

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.dataReviews = this.reviewService.reviews;
    console.log(this.dataReviews);
  }
}
