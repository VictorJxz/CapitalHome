import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor( private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {

    this.loading = true;

    this.activatedRoute.params.subscribe( params => {
      this.getArtist( params['id'] );
      this.getTopTracks( params['id'] );
    });
   }

   getArtist ( id: string ){

    this.loading = true;
    this.spotify.getArtist( id ).subscribe( artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });

   }

   getTopTracks ( id: string ) {

    this.spotify.getTopTracks( id )
      .subscribe( topTracks => {
        console.log( topTracks);
        this.topTracks = topTracks;
      });
   }

}
