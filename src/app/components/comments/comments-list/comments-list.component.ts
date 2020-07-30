import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  commentx = new Comment();
  email: string = localStorage.getItem('user');
  comment:string;
  comments: any[] = [{'email':'javier@gmail.com','comment':'comentarios de  pruebas'},
  {'email':'javier@gmail.com','comment':'comentarios de  pruebas'},
  {'email':'geovanny@gmail.com','comment':'comentarios de  pruebas'}];

  constructor() { }

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
