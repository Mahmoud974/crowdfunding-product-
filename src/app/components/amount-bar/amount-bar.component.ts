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
}
