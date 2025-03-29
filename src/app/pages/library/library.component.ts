import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-library',
  imports: [AuthComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent { }
