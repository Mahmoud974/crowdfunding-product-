import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoxMonitorComponent } from './components/box-monitor/box-monitor.component';
import { AmountBarComponent } from './components/amount-bar/amount-bar.component';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogTemplateDemo } from './components/confirm-dialog-template-demo/confirm-dialog-template-demo.component';
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
    ConfirmDialogTemplateDemo,
    ConfirmDialogTemplateDemo,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pledgeOptions = [
    {
      title: 'Pledge with no reward',
      pledge: ' ',
      description:
        'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
      amount: 0,
      buttonLabel: 'Enter your pledge',
      price: null,
    },
    {
      title: 'Bamboo Stand',
      pledge: 'Pledge $ 25 or more',
      description:
        'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      amount: 25,
      buttonLabel: 'Continue',
      price: 200,
    },
    {
      title: 'Black Edition Stand',
      pledge: 'Pledge $ 75 or more',
      description:
        'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      amount: 75,
      buttonLabel: 'Continue',
      price: 200,
    },
    {
      title: 'Mahogany Special Edition',
      pledge: 'Pledge $ 200 or more',
      description:
        'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      amount: 200,
      buttonLabel: 'Continue',
      price: 80,
    },
  ];

  title = 'crowdfunding';
  checked: boolean = false;
}
