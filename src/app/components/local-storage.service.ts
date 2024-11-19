import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Sauvegarder une donnée
  setItem(key: string, value: any): void {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }

  // Récupérer une donnée
  getItem<T>(key: string): T | null {
    const jsonData = localStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : null;
  }

  // Ajouter un montant au tableau dans le localStorage
  addAmountToArray(key: string, amount: number): void {
    const existingAmounts = this.getAmounts(key) || [];
    existingAmounts.push(amount);
    this.setItem(key, existingAmounts);
  }

  // Récupérer le tableau des montants du localStorage
  getAmounts(key: string): number[] {
    return this.getItem<number[]>(key) || [];
  }
}
