import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  category: any = {};
  playList: any[] = [];

  constructor( private activatedRouter: ActivatedRoute, private spotify: SpotifyService) {

    this.activatedRouter.params.subscribe( params => {

      this.getCategory( params['id'] );
      this.getPlaylist( params['id'] );

    });
   }

   getCategory( id: string ) {
     this.spotify.getCategory( id ).subscribe( response => {
       console.log( response );
     });
   }
   
   getPlaylist( id: string ) {
     this.spotify.geCtyPlaylist( id ).subscribe( response => {
       console.log( response );
       this.playList = response;
     });
   }

}
