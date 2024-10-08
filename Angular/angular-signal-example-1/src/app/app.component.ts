import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  constructor() {
    console.log('In constructor:', this.quantity());
  }

  onQuantitySelected(qty: number) {
    throw new Error('Method not implemented.');
    }
}
