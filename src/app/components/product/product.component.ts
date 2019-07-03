import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/Product";
import { CartService } from "src/app/cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  addToCart(product) {
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
  }

  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
