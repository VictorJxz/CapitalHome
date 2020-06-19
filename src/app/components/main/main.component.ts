import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loading: boolean;
  error: boolean;
  errorMessage: string;

  new_soungs: any[] = [];

  constructor( private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;
    
    this.spotify.getNewReleases().subscribe( (response: any) => {
      this.new_soungs = response;
      this.loading = false;
    }, ( errorServe ) =>{
      this.loading = false;
      this.error = true;
      console.log( errorServe );
      this.errorMessage = errorServe.error.error.message ;
    } );
   }

  ngOnInit(): void {
  }

}
