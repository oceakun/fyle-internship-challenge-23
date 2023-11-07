import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() repos: any;
  @Input() user: any;
  @Input() pageNumber: any;
  @Output() onPageNumberChange: EventEmitter<number> =
    new EventEmitter<number>();

  passNumber(value: number) {
        this.onPageNumberChange.emit(value);
  };
}