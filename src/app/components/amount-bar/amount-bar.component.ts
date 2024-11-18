import { Component } from '@angular/core';

@Component({
  selector: 'app-amount-bar',
  standalone: true,
  imports: [],
  templateUrl: './amount-bar.component.html',
  styleUrl: './amount-bar.component.css',
})
export class AmountBarComponent {
  amountTotal: number = 89.914;
  constructor() {
    console.log(this.amountTotal + 20);
  }
}
