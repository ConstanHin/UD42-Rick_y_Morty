import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character.model';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() detailCharacter: Character = new Character();

  @Output() updateCharEvent = new EventEmitter<Character>();

  constructor() {
  }

  ngOnInit(): void {
  }

  submitt() {
    this.updateCharEvent.emit(this.detailCharacter)
  }

}
