import { Component, effect, signal } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  selectedProduct = signal<Product>({
    id: 5,
    name: 'Hammer',
    price: 12
  });

  constructor() {
    console.log('In constructor:', this.quantity());
    effect(() => console.log('In effect', this.quantity()));
    this.quantity.update(q => q * 2)
  }

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
    // this.quantity.set(67);
    // this.quantity.set(42);
  }
}

export interface Product {
    id: number;
    name: string;
    price: number;
}
