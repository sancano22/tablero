import { Component, OnInit } from '@angular/core';
import {ListaCategorias} from '../ListaCategorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias=ListaCategorias;

  constructor() { }

  ngOnInit(): void {
  }

}
