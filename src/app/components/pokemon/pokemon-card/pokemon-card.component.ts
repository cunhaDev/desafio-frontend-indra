import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})

export class PokemonCardComponent implements OnInit {

  @Input() name: string;
  @Input() idNumber: number;
  @Input() type1: string;
  @Input() type2: string;
  @Input() spritePath: string;

  constructor() { }

  ngOnInit(): void {

  }

}
