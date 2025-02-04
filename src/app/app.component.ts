import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { NameFormComponent } from './name-form/name-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, ProgressBarComponent, AuthorListComponent, CommonModule, FormsModule, ToggleComponent, NameFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('chartContainer') container?: ElementRef<HTMLDivElement>;
  @ViewChildren(ToggleComponent) toggleList?: QueryList<ToggleComponent>;
  title = 'todo_list';
  name = 'Nhat Phan';


  ngOnInit() {
    console.log(this.container)
  }

  ngAfterViewInit() {
    console.log(this.container, this.toggleList)
  }
}
