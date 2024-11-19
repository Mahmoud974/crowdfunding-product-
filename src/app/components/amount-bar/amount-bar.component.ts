import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-amount-bar',
  standalone: true,
  imports: [],
  templateUrl: './amount-bar.component.html',
  styleUrl: './amount-bar.component.css',
})
export class AmountBarComponent implements OnInit, OnChanges {
  amountTotal: number = 89.914;
  @Input() amountInitial: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['amountInitial']) {
      console.log('amountInitial a changé:', this.amountInitial);
      this.cdr.detectChanges();
    }
  }

  ngOnInit(): void {
    console.log('Initial amountInitial:', this.amountInitial);
  }
}
