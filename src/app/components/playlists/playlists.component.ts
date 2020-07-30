import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlist: any = {};
  errorMessage: string;

  constructor( private spotify: SpotifyService, private router: Router) {
    this.spotify.getFeaturedPy().subscribe( response => {
      console.log( response['items'] );
      this.playlist = response['items'];
    }, ( errorServe ) =>{
      this.errorMessage = errorServe.error.error.message ;
    } );
   }

  ngOnInit(): void {
  }

  seePlaylist( item ){
    console.log( item );
    this.router.navigate(['/home/playlist',item]);
  }

}
