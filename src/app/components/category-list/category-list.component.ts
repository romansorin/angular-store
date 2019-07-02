import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/categories';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories = categories;

  constructor() { }

  ngOnInit() {
  }

}
