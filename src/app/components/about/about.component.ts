import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Plan, planArray } from '../../db/plan-array';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  planArray: Plan[] = planArray;
  freePlan: boolean = true;

  constructor() {}
}
