import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PledgeOptions, pledgeOptions } from '../../db/donation-array';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-donation-app',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './donation-app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonationAppComponent {
  pledgeOptions: PledgeOptions[] = pledgeOptions;
  selectedAmount: number = 0;

  myNumber: number = 12;
  defaultAmount: number = 89914;
  totalAmount: number = this.defaultAmount;

  numberInput: number = this.defaultAmount;

  @Output() notify = new EventEmitter<number>();
  @Input() stockNumber: number = 0;
  @Output() selectedPledge = new EventEmitter<number>();
  @Output() enteredAmount = new EventEmitter<number>();

  addToTotal(): void {
    this.totalAmount += this.numberInput;
    this.localStorageService.setItem('totalAmount', this.totalAmount);
    console.log(`Montant total mis à jour : ${this.totalAmount}`);
  }
  onRadioChange(itemId: number) {
    this.selectedAmount = itemId;
    console.log('Radio selection changed: ', this.selectedAmount);
  }

  calculateTotal(itemId: number): number {
    const selectedItem = this.pledgeOptions.find((item) => item.id === itemId);
    if (selectedItem) {
      return selectedItem.amountPlans + this.numberInput;
    }
    console.log(this.numberInput);

    return this.numberInput;
  }

  onSubmit(donationForm: any) {
    console.log('Valeur de numberInput:', this.numberInput);
    console.log(this.defaultAmount);
  }

  constructor(private localStorageService: LocalStorageService) {}
}
