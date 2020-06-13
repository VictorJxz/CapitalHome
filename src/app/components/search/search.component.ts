import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  loading: boolean;

  artists: any[] = [];
  dataSearch: string;

  constructor( private activatedRoute: ActivatedRoute,
        private spotifyService: SpotifyService) {

          this.loading = true;

    this.activatedRoute.params.subscribe( params => {

      this.dataSearch = params['termino'];
      this.spotifyService.getArtists( params['termino'] ).subscribe( (respose: any) => {
        this.artists = respose;
        this.loading = true;
      })
    })
   }

}
