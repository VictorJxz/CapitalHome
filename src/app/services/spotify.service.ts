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
      'Authorization': 'Bearer BQAuSpxibI0Nl0fnDazILnUO5TsofssdloCBuZDa6k5UoxHwhsAXF3sBCrW7s-shQUA4ltpQdITPiPboGFo'
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
}
