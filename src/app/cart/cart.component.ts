import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

   ngOnInit(): void {
  }

  onSubmit(): void{
    // process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('You orders has submitted',
      this.checkoutForm.value);

    this.checkoutForm.reset();
  }

}
