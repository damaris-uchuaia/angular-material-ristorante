import { Component, OnInit } from '@angular/core';
import { Desert } from '../shared/desert';

@Component({
  selector: 'app-menu-desert',
  templateUrl: './menu-desert.component.html',
  styleUrls: ['./menu-desert.component.scss']
})
export class MenuDesertComponent implements OnInit {

  deserts: Desert[] = [
    {
      id: '0',
      name: 'Sorvete Morango',
      image: '/assets/images/morango.jpg',
      description: 'O melhor sorvetinho do Brasil'
    },
    {
      id: '1',
      name: 'Sorvete Chocolate',
      image: '/assets/images/chocolate.jpg',
      description: 'O mais cremosinho do Brasil'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
