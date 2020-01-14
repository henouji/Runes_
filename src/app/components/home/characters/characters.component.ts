import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// Character Model
import { Character } from '../../../models/character/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  @Output() character = new EventEmitter<Character>();
  characters: Array<Character> = new Array<Character>();
  constructor() { }

  ngOnInit() {
    this.characters.push({ id: "id1", name: "character 1", image: "https://wallpaperaccess.com/full/1111445.jpg" });
    this.characters.push({ id: "id1", name: "character 2", image: "https://images7.alphacoders.com/528/thumb-1920-528418.jpg" });
    this.characters.push({ id: "id1", name: "character 3", image: "https://i.redd.it/7b6c4zorbs7z.png" });
  }

  emitCharacter(character : Character){
    this.character.emit(character);
  }

}
