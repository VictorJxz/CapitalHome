import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: any = {};
  playList: any = {};
  loading: boolean;

  constructor(private activatedRouter: ActivatedRoute, private spotify: SpotifyService,
    private router: Router) {

    this.activatedRouter.params.subscribe( params => {

      this.loading = true;
      this.getCategory( params['id'] );
      this.getPlaylist( params['id'] );

    });

   }

  ngOnInit(): void {
  }

  getCategory( id: string ) {
    this.spotify.getCategory( id ).subscribe( response => {
      console.log( response );
      this.category = response;
      this.loading = false;
    });
  }

  getPlaylist( id: string ) {
    this.spotify.geCtyPlaylist( id ).subscribe( response => {
      console.log( response );
      this.playList = response;

    });
  }

  seePlaylist( item ){
    console.log( item );
    this.router.navigate(['/home/playlist',item]);
  }

}
