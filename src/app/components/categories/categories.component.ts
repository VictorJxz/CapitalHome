import { Component, OnInit } from '@angular/core';

//imports
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  new_categories: any[] = [];
  errorMessage: string;

  constructor(private spotifyService: SpotifyService, private router: Router ) {

    this.spotifyService.getCategories().subscribe( ( response:any ) => {

      this.new_categories = response;
      console.log( this.new_categories );
    }, ( errorServe ) =>{
      this.errorMessage = errorServe.error.error.message ;
    } );
   }

  ngOnInit(): void {
  }
  seeCategory( item ){
    this.router.navigate(['/home/category', item.id]);

  }
}
