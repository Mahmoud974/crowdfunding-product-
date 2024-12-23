import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoxMonitorComponent } from './components/box-monitor/box-monitor.component';
import { AmountBarComponent } from './components/amount-bar/amount-bar.component';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DonationAppComponent } from './components/donation-app/donation-app.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    BoxMonitorComponent,
    AmountBarComponent,
    AboutComponent,
    ButtonModule,
    DonationAppComponent,
    ConfirmationDialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  amountTotal: number = 89914;
  amountTotalParent = signal(89914);
  contributorCount: number = 5007;

  public doSomething(amount: number): void {
    this.amountTotalParent.set(amount);

    this.contributorCount += 1;

    console.log('Montant total mis à jour : ', amount);
    console.log('Nombre de contributeurs : ', this.contributorCount);
  }
}
