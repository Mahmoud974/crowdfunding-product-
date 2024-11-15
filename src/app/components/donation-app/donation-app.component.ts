import { Component } from '@angular/core';
import { PledgeOptions, pledgeOptions } from '../../db/donation-array';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donation-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donation-app.component.html',
  styleUrls: ['./donation-app.component.css'],
})
export class DonationAppComponent {
  pledgeOptions: PledgeOptions[] = pledgeOptions;
  selectedAmount: number | null = null; // On initialise avec null, ce qui signifie aucune sélection

  // Cette méthode met à jour selectedAmount avec l'ID de l'élément sélectionné
  onRadioChange(itemId: number) {
    this.selectedAmount = itemId; // On met à jour selectedAmount avec l'ID de l'élément sélectionné
    console.log('Radio selection changed: ', this.selectedAmount);
  }
}
