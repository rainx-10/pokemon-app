import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: PokemonComponent },
    { path: 'dashboard', component: PokemonComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
  
export class AppRoutingModule {}