import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  commentsList: AngularFireList<any>;
  
  selectedProduct: Comment = new Comment();

  constructor(private firebase:AngularFireDatabase ) { }

  getComments() {
   return this.commentsList = this.firebase.list('comments');
  }

  setComment( comment: Comment ) {
    
    this.commentsList.push({
      email: comment.email,
      comment: comment.comment
    });
  }

}