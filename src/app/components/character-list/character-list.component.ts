import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/serivces/character.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  charactersList: Character[] = [];
  detailCharacter: Character = new Character();
  page: number = 1;

  formSearchInputId = new FormControl('');
  formSearchInputName = new FormControl('');

  constructor(private charactersService: CharacterService) { }

  ngOnInit(): void {
    this.getAllCharacters()

  }

  // Submit Update
  submitUpdate(char: Character) {
    this.detailCharacter = char;
    this.update();
  }

  // Submit SearchId
  submitSearchId() {
    const id = this.formSearchInputId.value
    console.log(this.formSearchInputId.value, "formValueId");
    this.getById(id);
  }
  // Submit SearchName
  submitSearchName() {
    const id = this.formSearchInputName.value
    console.log(this.formSearchInputName.value, "formValueName");
    this.getByName(id);
  }

  // Get by Name
  getByName(name: string) {
    this.charactersService.getByTitle(name).subscribe({
      next: (v) => {
        this.charactersList = v;
        console.log(v, " :v")
      },
      error: (e) => console.log(e),
      complete: () => console.log("complete")

    })
  }

  // Get by ID
  getById(id: number) {
    this.charactersService.getItem(id).subscribe({
      next: (v) => {
        this.charactersList = [v];
        console.log(v, " :v")
      },
      error: (e) => console.log(e),
      complete: () => console.log("complete")

    })
  }

  // Update
  update(): void {
    this.charactersService.update(this.detailCharacter.id, {
      title: this.detailCharacter.title,
      description: this.detailCharacter.description
    }).subscribe(
      (response: any) => {
        this.getAllCharacters();
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  // Get all
  getAllCharacters(): void {
    this.charactersService.list().subscribe(
      (characters: any) => {
        this.charactersList = characters;
      },
      (error: any) => {
        console.log(error);
      });
  }

  // Delete
  delete(id: any): void {
    this.charactersService.delete(id).subscribe(
      (response: any) => {
        console.log("delete OK, response:", response);
        this.getAllCharacters();
      },
      (error: any) => {
        console.log(error);
      });
  }

  // Details - mostrar el componente details
  details(char: Character) {
    this.detailCharacter = char;
  }



}
