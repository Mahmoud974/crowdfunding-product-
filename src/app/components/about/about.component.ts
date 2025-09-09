import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Plan, planArray } from '../../db/plan-array';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  planArray: Plan[] = planArray;
  freePlan: boolean = true;
  @Input() pick = '';
}
