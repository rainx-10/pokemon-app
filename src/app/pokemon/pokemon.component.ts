import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pokemon {
  name: string;
  id: number;
  sprites: { front_default: string };
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  base_experience: number;
  height: number;
  weight: number;
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  displayedColumns: string[] = ['Name', 'Image', 'Abilities', 'Types', 'Base Experience', 'Height', 'Weight'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPokemonData();
  }

  fetchPokemonData() {
    const pokemonIds = Array.from({ length: 151 }, (_, i) => i + 1); // First 151 Pokémon
    pokemonIds.forEach(id => {
      this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe(
        (data) => {
          this.pokemonList.push(data);
        },
        (error) => {
          console.error('Error retrieving Pokémon data:', error);
        }
      );
    });
  }
}
