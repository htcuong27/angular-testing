import { ReviewModelComponent } from './../review-model/review-model.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../../services/review.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-builder',
  templateUrl: './review-builder.component.html',
  styleUrls: ['./review-builder.component.scss'],
})
export class ReviewBuilderComponent implements OnInit {
  submitForm!: FormGroup;

  reviewList: any[] = [];

  constructor(private dialog: MatDialog, private fb: FormBuilder, private reviewService: ReviewService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.submitForm = this.fb.group({
      reviewList: new FormArray([])
    });
    console.log({ a: this.submitForm });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReviewModelComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'confirm') {
        const reviewList = <FormArray>this.submitForm.get('reviewList');
        console.log({ result, reviewList });
        reviewList?.push(new FormControl({
            question: result.data.question,
            answerOptions: result.data.answerOptions,
            isRequired: result.data.isRequired,
          }));
        // reviewList.({
        //   question: result.data.question,
        //   answerOptions: result.data.answerOptions,
        //   isRequired: result.data.isRequired,
        // });
        if (result.data.isRequired) {
          reviewList?.setValidators([Validators.required]);
        }
      }
    });
  }
  onChangeOtherValue(option: any, event: any) {
    option.otherValue = event.target.value;
  }

  isAllFilled(): boolean {
    return this.submitForm.value.reviewList.some((review: any) => {
      if (!review.reply && review.isRequired && !review.answerOptions) {
        return false;
      }
      if (review.answerOptions) {
        return review.answerOptions.some((answer: any) => {
          if (answer.checked) {
            return true;
          } else {
            return false;
          }
        })
      }
      return true;
    })
  }


  onReviewData(): void {
    console.log({ reviewList: this.submitForm.value.reviewList });
    if (!this.isAllFilled()) {
      alert('Required')
      return;
    }
    this.reviewService.storeDataReview(this.submitForm.get('reviewList')?.value);
    this.router.navigate(['../answers'], {
      relativeTo: this.route
    });
  }
}
