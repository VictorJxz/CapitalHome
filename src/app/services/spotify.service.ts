import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service')
   }

   getQuery( query: string) {

     const url = `https://api.spotify.com/v1/${ query }`;
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6LFM5kjPL5masa4QwVjM_Uc2a5qgyCGZGivKEO6sNuwJBD3IycAq5UwiCAIB54Em54RyyJ8OR5nQvMY8'
    });

    return this.http.get(url, { headers });
   }

   getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20') 
    .pipe( map( (response: any) =>  response.albums.items));
   }

   getArtists( data: string) {

    return this.getQuery(`search?q=${ data }&type=artist&limit=15`)
      .pipe( map( (reponse: any) =>  reponse.artists.items));
     
   }

   getArtist ( id: string ) {
    return this.getQuery(`artists/${id}`);
    //.pipe( map( (reponse: any) =>  reponse.artists.items));
   }

   getTopTracks ( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( (reponse: any) =>  reponse['tracks']));
   }

   getCategories() {
    return this.getQuery('browse/categories?limit=20')
    .pipe( map( (reponse: any) =>  reponse.categories.items));
   }

   getCategory( id: string ) {
    return this.getQuery(`browse/categories/${ id }`);
   }

   geCtyPlaylist( id: string ) {
    return this.getQuery(`browse/categories/${ id }/playlists`)
    .pipe( map( (reponse: any) =>  reponse['playlists']));
   }

   getPlaylistTrack( id: string ) {
    return this.getQuery(`playlists/${ id }/tracks?limit=20`)
    .pipe( map( (reponse: any) =>  reponse['items']));
   }

   getPlaylist( id: string ) {
    return this.getQuery(`playlists/${ id }`);
   }

   getFeaturedPy( ) {
    return this.getQuery(`browse/featured-playlists?limit=20`)
    .pipe( map( (reponse: any) =>  reponse['playlists']));
   }
   
}
