import { Component, Input } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-box-monitor',
  standalone: true,
  imports: [ConfirmDialogModule, ButtonModule, CommonModule],
  templateUrl: './box-monitor.component.html',
})
export class BoxMonitorComponent {
  @Input() message: string = 'ss';
  openBookMarked() {
    window.alert(this.message);
    console.log(' à regler!!!');
  }
}
