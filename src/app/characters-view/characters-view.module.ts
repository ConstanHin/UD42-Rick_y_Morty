import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CharactersViewComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CharactersViewComponent
  ],

  bootstrap: [CharactersViewComponent]
})
export class CharactersViewModule { }
