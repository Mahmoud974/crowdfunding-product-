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
})
export class AmountBarComponent {
  @Input() amountTotal: number = 0;
  @Input() amountTotalParent: any = 0;
  @Input() contributorCount: number = 0;

  getProgressBarWidth(): any {
    const goal = 100000;
    const progress = this.amountTotalParent();
    const prc = (progress / goal) * 100;
    if (prc <= 100) {
      console.log(prc);

      return `${(progress / goal) * 100}%`;
    }
  }
}
