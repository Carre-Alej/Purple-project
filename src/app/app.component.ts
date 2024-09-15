import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import { MatMenu } from '@angular/material/menu'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatToolbarModule, MatIcon, MatMenu], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myOwnSpace';
}
