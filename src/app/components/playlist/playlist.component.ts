import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlist: any = {};
  playlistTracks: any[] = [];
  loading: boolean;


  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) { 

    this.loading = true;

    this.activatedRoute.params.subscribe( params => {
      this.getPlaylistTracks( params['id']);
      this.getPlaylist( params['id'] );
    });

  }

  ngOnInit(): void {
  }

  getPlaylistTracks( id:string ){

    this.spotify.getPlaylistTrack( id ).subscribe( response => {
      console.log( response);
      this.playlistTracks = response;
      this.loading = false;
    });
  }

  getPlaylist( id: string ){
    this.spotify.getPlaylist( id ).subscribe( response => {
      console.log( response );
      this.playlist = response;
      this.loading = false;
    });
  }

}
