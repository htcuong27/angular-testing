import { Component, ElementRef, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-review-model',
  templateUrl: './review-model.component.html',
  styleUrls: ['./review-model.component.scss'],
})
export class ReviewModelComponent implements OnInit {
  @ViewChild('questionEle') questionEle!: ElementRef; 
  question: string = '';
  isCheckbox: boolean = false;
  isPara: boolean = true;
  answerOptions: { id: number; answer: string, checked: boolean }[] = [];
  isRequired: boolean = false;
  isOtherOption: boolean = false;

  constructor(
    @Optional() public dialogRef: MatDialogRef<ReviewModelComponent>
  ) {}

  ngOnInit(): void {
    this.answerOptions = new Array(1).fill({}).map((_, i) => ({
      id: i,
      answer: '',
      checked: false
    }));
  }

  onAddMore(): void {
    if (this.answerOptions.length >=5) { 
      return;
    }
    this.answerOptions.push({
      id: this.answerOptions.length,
      answer: '',
      checked: false
    });
  }

  onConfirm(): void {
    let data: any = {};
    if (this.question.trim() === '') {
      this.questionEle.nativeElement.focus();
      return;
    }
    data['question'] = this.question;
    data['isRequired'] = this.isRequired;
    if (this.isCheckbox) {
      data['answerOptions'] = [...this.answerOptions];
      if (this.isOtherOption) {
        data['answerOptions'].push({
          id: -1,
          answer: 'Other',
          checked: false
        })
      }
    }
    this.dialogRef.close({
      event: 'confirm',
      data,
    });
  }

  onCancel(): void {
    this.dialogRef.close({ event: 'cancel' });
  }
}
