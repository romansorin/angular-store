import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {
  products = products.filter(product => product.category === "Clothes");

  constructor() { }

  ngOnInit() {
  }

}
