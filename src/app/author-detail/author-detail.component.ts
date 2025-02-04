import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../authors';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-author-detail',
  imports: [CommonModule],
  template: `  
    <div *ngIf="author">
      <strong>{{author.firstName}} {{author.lastName}}</strong>
      <button (click)="handleDelete()">x</button>
    </div>
  `,
  styles: [``]
})
export class AuthorDetailComponent implements OnInit {
  @Input() author?: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() { }
  ngOnInit() {
  }
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}