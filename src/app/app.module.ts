import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DomseguroPipe } from './pipes/domseguro.pipe';

// import firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { FirebaseService } from 'src/app/services/firebase.service';

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
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { CommentsListComponent } from './components/comments/comments-list/comments-list.component';
import { CommentsComponent } from './components/comments/comments/comments.component';
import { LicensesComponent } from './components/licenses/licenses.component';

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
    RegisterComponent,
    CategoriesComponent,
    CategoryComponent,
    PlaylistComponent,
    PlaylistsComponent,
    CommentsListComponent,
    CommentsComponent,
    LicensesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    SpotifyService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
