import { Component, OnInit } from '@angular/core';
import { authors, Author } from '../authors';
import { AuthorDetailComponent } from '../author-detail/author-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-list',
  imports: [AuthorDetailComponent, CommonModule],
  template: `
    <app-author-detail
      *ngFor="let author of authors"
      [author]="author"
      (deleteAuthor)="handleDelete($event)">
      
    </app-author-detail>
  `,
  styles: [``]
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  constructor() { }

  ngOnInit() {
  }

  handleDelete(author: Author) {
    this.authors = this.authors.filter(item => item.id !== author.id);
  }

}