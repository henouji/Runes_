import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../../models/character/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  character: Character;

  @Input() setCharacter(event : Character) {
    this.character = event;
    console.log(event)
  };

  constructor() { }

  ngOnInit() {
  }

}
