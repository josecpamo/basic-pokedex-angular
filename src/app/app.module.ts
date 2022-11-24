import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsComponent } from './pokemons/pokemons.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CardComponent, PokemonsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
