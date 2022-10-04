import { Component, OnInit } from '@angular/core';
import { ListProducts, Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  ListProducts = ListProducts;

  constructor() { }

  ngOnInit(): void {
  }

}
