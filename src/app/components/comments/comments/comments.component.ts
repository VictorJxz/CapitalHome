import { Component, OnInit } from '@angular/core';

import { Comment } from 'src/app/models/comment';
import { NgForm } from '@angular/forms/forms';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentx = new Comment();
  email: string = localStorage.getItem('user');
  comment:string;
  comments: any[] = [];

  constructor( private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  setComment( form: NgForm ) {

    if ( form.invalid ) {return}

    this.commentx.email = localStorage.getItem('user');
    this.commentx.comment = this.comment;

    this.comments.push( this.commentx );

    console.log( this.comments );
    this.reset( form );

  }

  reset( form: NgForm ) {
    if ( form.invalid ) {return}
    form.reset();

  }

}
