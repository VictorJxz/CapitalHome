
import { Routes } from '@angular/router';

import { SearchComponent } from '../../components/search/search.component';
import { MainComponent } from '../../components/main/main.component';
import { ArtistComponent } from '../../components/artist/artist.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { CategoryComponent } from '../../components/category/category.component';
import { PlaylistComponent } from '../../components/playlist/playlist.component';
import { PlaylistsComponent } from '../../components/playlists/playlists.component';
import { CommentsListComponent } from '../comments/comments-list/comments-list.component';
import { LicensesComponent } from '../licenses/licenses.component';


export const HOME_ROUTES: Routes = [
    {path: 'search/:termino', component: SearchComponent},
    {path: 'category/:id', component: CategoryComponent },
    {path: 'categories', component: CategoriesComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: 'main',component: MainComponent},
    {path: 'playlist/:id', component: PlaylistComponent},
    {path: 'playlists', component: PlaylistsComponent},
    {path: 'comments-list',component: CommentsListComponent},
    {path: 'licenses', component: LicensesComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'main'}
];