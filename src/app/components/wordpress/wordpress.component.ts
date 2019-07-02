import { Component, OnInit } from "@angular/core";
import { products } from "src/app/products";

@Component({
  selector: "app-wordpress",
  templateUrl: "./wordpress.component.html",
  styleUrls: ["./wordpress.component.scss"]
})
export class WordpressComponent implements OnInit {
  products = products.filter(product => product.category === "Wordpress");

  constructor() {}

  ngOnInit() {
    
  }
}
