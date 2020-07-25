import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
// Services
import { SpotifyService } from './services/spotify.service';
import { MainComponent } from './components/main/main.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/loading/loading.component';
import { from } from 'rxjs';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    MainComponent,
    NoimagePipe,
    DomseguroPipe,
    CardsComponent,
    LoadingComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
