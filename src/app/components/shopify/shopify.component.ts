import { Component, OnInit } from "@angular/core";
import { products } from "src/app/products";


@Component({
  selector: "app-shopify",
  templateUrl: "./shopify.component.html",
  styleUrls: ["./shopify.component.scss"]
})
export class ShopifyComponent implements OnInit {
  products = products.filter(product => product.category === "Shopify");


  constructor() {}

  ngOnInit() {}
}
