import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../characterObj';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() character: Character = new Character();

  constructor() { }

  ngOnInit(): void {
  }

}
