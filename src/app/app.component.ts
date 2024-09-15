import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MatButton, MatButtonConfig } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatToolbarModule, MatIcon, MatMenu, MatButton, MatMenuModule ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myOwnSpace';
}


