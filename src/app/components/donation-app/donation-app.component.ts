import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonationAppComponent {
  pledgeOptions: PledgeOptions[] = pledgeOptions;
  selectedAmount: number = 0;
  closeAfterPushContinue = signal<boolean>(true);
  myNumber: number = 12;
  @Input() amountTotal: number = 89914;

  numberInput: number = this.amountTotal;
  @Output() notify = new EventEmitter<number>();
  @Input() stockNumber: number = 0;

  enteredAmount: number = 0;
  theTotalinitial = signal(0);
  @Output() amountParent = new EventEmitter<any>();
  @Output() onDatePicked = new EventEmitter<any>();
  @ViewChild('dialogRef') dialogRef!: ElementRef<HTMLDialogElement>;

  pickTheValue(nbre: number) {
    console.log(nbre);

    return nbre;
  }

  public addToTotal(): void {
    this.enteredAmount &&
      console.log((this.amountTotal += this.enteredAmount - 2));
    this.theTotalinitial.set((this.amountTotal += this.enteredAmount));

    this.amountParent.emit(this.amountTotal);
    this.closeAfterPushContinue.set(false);
  }
  onRadioChange(id: number): void {
    this.selectedAmount = id;

    // Trouver l'option sélectionnée pour initialiser enteredAmount
    const selectedOption = this.pledgeOptions.find(
      (option) => option.id === id
    );
    if (selectedOption) {
      this.enteredAmount = selectedOption.amountPlans;
    }
  }

  openDialog(): void {
    this.closeAfterPushContinue.set(true);
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.nativeElement.close();
    }
  }

  onSubmit(donationForm: any): void {
    console.log('Valeur de numberInput:', this.numberInput);
    console.log(this.amountTotal);

    this.notify.emit(this.amountTotal);
  }
}
