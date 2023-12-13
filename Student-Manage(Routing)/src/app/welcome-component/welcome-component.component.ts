import { Component } from '@angular/core';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { RouterLink, RouterOutlet, RouterLinkActive} from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-welcome-component',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive,RouterOutlet,LoginComponentComponent],
  templateUrl: './welcome-component.component.html',
  styleUrl: './welcome-component.component.css'
})
export class WelcomeComponentComponent {

}
