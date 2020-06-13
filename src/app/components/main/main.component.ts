import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  new_soungs: any[] = [];

  constructor( private spotify: SpotifyService) {
    
    this.spotify.getNewReleases().subscribe( (response: any) => {
      this.new_soungs = response;
    })
   }

  ngOnInit(): void {
  }

}
