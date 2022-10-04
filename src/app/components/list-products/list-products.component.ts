import { Component, OnInit } from '@angular/core';
import { ListProducts, Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  ListProducts = ListProducts;

  constructor() { }

  ngOnInit(): void {
  }

}