import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: { name: string, quantity: number }[] = [];

  constructor(private navCtrl: NavController) { }

  addItemToCart() {
    const ingredient = prompt('Add an ingredient to your cart');
    if (ingredient) {
      const index = this.cart.findIndex(item => item.name === ingredient);
      if (index >= 0) {
        this.cart[index].quantity++;
      } else {
        this.cart.push({ name: ingredient, quantity: 1 });
      }
    }
  }

  deleteItemFromCart(item: { name: string, quantity: number }) {
    const index = this.cart.indexOf(item);
    this.cart.splice(index, 1);
  }

  ngOnInit() {
  }

}
