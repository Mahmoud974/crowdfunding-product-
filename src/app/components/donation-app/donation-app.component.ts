import { Component, Input, input, signal } from '@angular/core';
import { PledgeOptions, pledgeOptions } from '../../db/donation-array';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-donation-app',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, InputTextModule],
  templateUrl: './donation-app.component.html',
  styleUrls: ['./donation-app.component.css'],
})
export class DonationAppComponent {
  pledgeOptions: PledgeOptions[] = pledgeOptions;
  selectedAmount: number | null = null;
  firstName = input<string>('Farouck');
  visible: boolean = false;
  items: any | undefined;
  myNumber: number = 12;

  protected occupation: any = signal('Developper');

  onNumber = () => {
    // this.myNumber = this.myNumber + 1;
    // console.log(this.myNumber);
  };

  onRadioChange(itemId: number) {
    this.occupation.set('Ingénieur');
    console.log(this.occupation());

    this.selectedAmount = itemId;
    console.log('Radio selection changed: ', this.selectedAmount);
  }
}
