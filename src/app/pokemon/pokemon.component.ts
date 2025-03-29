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
  stats: { base_stat: string, stat: { name: string} } [];
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  isDarkMode = false; 
  searchQuery: string = '';
  pokemonList: Pokemon[] = [];
  filteredPokemon = this.pokemonList;
  displayedColumns: string[] = [
    '#',
    'Name',
    'Sprite',
    'Type',
    'Total',
    'HP',
    'Attack',
    'Defense',
    'Sp.Atk',
    'Sp.Def',
    'Speed'
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadDarkModePreference();
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

  // Filter Pokémon based on the search query
  filterPokemon() {
    if (this.searchQuery.trim() === '') {
      this.filteredPokemon = this.pokemonList; // If no query, show all Pokémon
    } else {
      this.filteredPokemon = this.pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  getTotalStats(stats: any[]): number {
    return stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  loadDarkModePreference(): void {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.isDarkMode = isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
  }
}
