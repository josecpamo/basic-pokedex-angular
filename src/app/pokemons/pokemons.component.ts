import { Component } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent {
  firstData: any;
  pokemons: any[] = [];
  url = 'https://pokeapi.co/api/v2/pokemon/';
  error: any;

  constructor(private apiFetch: ApiFetchService) {}

  ngOnInit() {
    this.apiFetch.getData(this.url).subscribe(
      (res) => {
        this.firstData = res;

        this.firstData.results.forEach((el: any) => {
          this.apiFetch.getData(el.url).subscribe((res) => {
            this.pokemons.push(res);
          });
        });
      },
      (error) => {
        this.error = {
          error: error.ok,
          status: error.status,
          statusText: error.error,
        };
      }
    );
  }
}
