import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  numArr: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  constructor() {
    console.log('numArr : ', this.numArr);
  }
  @Input() pageNumber: any;

  @Output() passNumber: EventEmitter<number> = new EventEmitter<number>();

  updatePageNumber(goToPage: string | number): void {
    if (goToPage == 'inc') {
      if (this.pageNumber == 10) {
        this.pageNumber = 1;
      } else {
        this.pageNumber = this.pageNumber + 1;
      }
    } else if (goToPage == 'dec') {
      if (this.pageNumber == 1) {
        this.pageNumber = 10;
      } else {
        this.pageNumber = this.pageNumber - 1;
      }
    } else {
      this.pageNumber = goToPage;
    }
    this.passNumber.emit(this.pageNumber);
  }
}