import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FormsModule } from '@angular/forms';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomeComponentComponent,MovieComponentComponent,FormsModule,CommonModule, RouterOutlet,LoginComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentManage';
}
