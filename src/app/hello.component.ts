import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
    selector: 'app-hello',
    template: ` <h2>Hello there!</h2> 
    <div *ngIf="user.age >= 13">Bạn có thể xem nội dung</div>
    `,
    standalone: true,
    imports: [CommonModule] // Import CommonModule
})
export class HelloComponent {
    user = {
        name: 'Tiep Phan',
        age: 30,
    };
}