import { Component, OnInit } from '@angular/core';
import {Oeuvre} from '../oeuvre';

@Component({
  selector: 'app-oeuvre',
  templateUrl: './oeuvre.component.html',
  styleUrls: ['./oeuvre.component.css']
})
export class OeuvreComponent implements OnInit {
    oeuvres: Oeuvre[] = [
    {
      id: 1,
      nom: 'Tableau',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      nom: 'Tableau 2',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      nom: 'Tableau 3',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 4,
      nom: 'Tableau 4',
      image: 'https://via.placeholder.com/300x200'
    }
];
  constructor() {
  }

  ngOnInit(): void {

  }

}
