import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private routes: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
     // First get the product id from the current route.
    const routerParams = this.routes.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart');
  }


}
