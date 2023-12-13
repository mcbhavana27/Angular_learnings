import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';


export const routes: Routes = [
    {
        path: "login", component:LoginComponentComponent
    },

    {
        path:"addmovie", component: MovieComponentComponent
    },

    {
        path: 'welcome', component: WelcomeComponentComponent
    }

];
