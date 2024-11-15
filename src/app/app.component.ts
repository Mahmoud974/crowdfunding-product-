import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoxMonitorComponent } from './components/box-monitor/box-monitor.component';
import { AmountBarComponent } from './components/amount-bar/amount-bar.component';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    BoxMonitorComponent,
    AmountBarComponent,
    AboutComponent,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crowdfunding';
  checked: boolean = false;
}
