import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersViewComponent } from './characters-view/characters-view/characters-view.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { AboutComponent } from './about/about.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes: Routes = [
  {path: '', component: HomeCompComponent},
  {path: 'characters', component: CharactersViewComponent},
  {path: 'about', component: AboutComponent},
  {path: 'lista-characters', component: CharacterListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
