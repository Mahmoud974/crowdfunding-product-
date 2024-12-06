import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {
  // Vos variables existantes
  showConfirmation: boolean = false;
  amountTotal: number = 89914;
  amountTotalParent = signal(89914);
  enteredAmount: number = 89914;
  contributorCount: number = 5007;
  dialogRef: any;

  // Méthode pour ajouter au total et afficher la confirmation
  public addToTotal(): void {
    if (this.enteredAmount > 0) {
      this.amountTotal += this.enteredAmount;
      this.showConfirmationDialog();
    }
  }

  // Méthode pour afficher la confirmation
  private showConfirmationDialog(): void {
    const confirmationDialog = this.dialogRef.nativeElement.querySelector(
      '#confirmationDialog'
    );
    if (confirmationDialog) {
      confirmationDialog.showModal();
    }
  }

  // Méthode pour fermer la confirmation
  public closeConfirmation(): void {
    const confirmationDialog = this.dialogRef.nativeElement.querySelector(
      '#confirmationDialog'
    );
    if (confirmationDialog) {
      confirmationDialog.close();
    }
  }
}
