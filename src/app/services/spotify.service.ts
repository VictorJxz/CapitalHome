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
      'Authorization': 'Bearer BQCsJJDy5uJ9tp5BA-ycRUqgqNNr4jAh9en1twBG1YTXbZbd_aUyUoBE1Mtc9TIM5uXCOwtflCHdrdRFA1s'
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
}
