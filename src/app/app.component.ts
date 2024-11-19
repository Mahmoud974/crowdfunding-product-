import { LocalStorageService } from './components/local-storage.service';
import { Component, Input } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoxMonitorComponent } from './components/box-monitor/box-monitor.component';
import { AmountBarComponent } from './components/amount-bar/amount-bar.component';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DonationAppComponent } from './components/donation-app/donation-app.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @Input() amountInitial: number;

  constructor(private localStorageService: LocalStorageService) {
    this.amountInitial =
      this.localStorageService.getItem('totalAmount') || 89914;
  }
}
