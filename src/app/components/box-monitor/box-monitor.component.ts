import { Component } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-box-monitor',
  standalone: true,
  imports: [ConfirmDialogModule, ButtonModule],
  templateUrl: './box-monitor.component.html',
  styleUrl: './box-monitor.component.css',
})
export class BoxMonitorComponent {
  submit() {
    alert('okookko');
  }
}
