import { Component, OnInit } from '@angular/core';
import { products } from "src/app/products";

@Component({
  selector: 'app-magento',
  templateUrl: './magento.component.html',
  styleUrls: ['./magento.component.scss']
})
export class MagentoComponent implements OnInit {
  products = products.filter(product => product.category === "Magento");


  constructor() { }

  ngOnInit() {
  }

}
