import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  userobj:User=new User();
  login()
  {
    var uname=this.userobj.username;
    var pass=this.userobj.password;
    if(uname=="admin"&&pass=="admin")
    {
      console.log("Valid user")
    }
    else
    {
      console.log("Invalid user");
    }


  }


}