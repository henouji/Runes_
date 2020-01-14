import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../../../models/character/character';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() character: Character;
  
  constructor() { }

  ngOnInit() {
    this.character = { id: "id1", name: "character 1", image: "https://wallpaperaccess.com/full/1111445.jpg" };
  }

  ngDoCheck(){
    console.log(this.character)
  }

}
