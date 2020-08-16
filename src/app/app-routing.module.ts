import { PokemonReadComponent } from './components/pokemon/pokemon-read/pokemon-read.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [{
  path: "",
  component: PokemonReadComponent
},{
  path: "about",
  component: AboutComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
