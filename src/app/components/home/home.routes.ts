
import { Routes } from '@angular/router';

import { SearchComponent } from '../../components/search/search.component';
import { MainComponent } from '../../components/main/main.component';
import { ArtistComponent } from '../../components/artist/artist.component';

export const HOME_ROUTES: Routes = [
    {path: 'search/:termino', component: SearchComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: 'main',component: MainComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'main'}
];