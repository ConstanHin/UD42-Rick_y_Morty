import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/characters-view/characters-view/characters.service';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss']
})
export class CharactersViewComponent implements OnInit {

  charactersList: any;
  errorHtmlRequest = false;

  constructor(private charactersServicio: CharactersService) {

    this.charactersList = [];
  }

  ngOnInit(): void {
    //Utilizar el servicio para obtener los datos
   this.charactersList = this.charactersServicio.retornar()
  }

}
