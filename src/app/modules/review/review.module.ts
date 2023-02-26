import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewBuilderComponent } from './components/review-builder/review-builder.component';
import { ReviewAnswerComponent } from './components/review-answer/review-answer.component';
import { ReviewRouteModule } from './review.route';
import { ReviewComponent } from './review.component';
import { ReviewModelComponent } from './components/review-model/review-model.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { ReviewService } from './services/review.service';


@NgModule({
  declarations: [
    ReviewBuilderComponent,
    ReviewAnswerComponent,
    ReviewComponent,
    ReviewModelComponent
  ],
  imports: [
    CommonModule,
    ReviewRouteModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    ReviewService
  ],
  exports: [
    MatCheckboxModule,
    MatDialogModule
  ]
})
export class ReviewModule { }
