import {
  Component,
  EventEmitter,
  Input,
  input,
  Output,
  signal,
} from '@angular/core';
import { PledgeOptions, pledgeOptions } from '../../db/donation-array';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

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
  styleUrls: ['./donation-app.component.css'],
})
export class DonationAppComponent {
  pledgeOptions: PledgeOptions[] = pledgeOptions;
  selectedAmount: number = 0;
  firstName = input<string>('Farouck');
  visible: boolean = false;
  items: any | undefined;
  myNumber: number = 12;

  protected occupation: any = signal('Developper');
  numberInput: number = 0;

  @Output() notify = new EventEmitter<number>();
  @Input() stockNumber: number = 0;
  @Output() selectedPledge = new EventEmitter<number>(); // Crée un EventEmitter pour envoyer les données
  @Output() enteredAmount = new EventEmitter<number>(); // Pour l'amount saisi

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
  onSubmit(donationForm: any) {
    console.log('Valeur de numberInput:', this.numberInput);
  }

  onClickContinue() {
    return this.numberInput;
  }
  onSubmitPledge() {
    this.selectedPledge.emit(this.selectedAmount); // Émet l'ID du pledge sélectionné
    this.enteredAmount.emit(this.numberInput); // Émet le montant saisi
  }
}
