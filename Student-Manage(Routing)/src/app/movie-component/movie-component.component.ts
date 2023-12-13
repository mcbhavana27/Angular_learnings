import { Component } from '@angular/core';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie-component',
  standalone: true,
  imports: [],
  templateUrl: './movie-component.component.html',
  styleUrl: './movie-component.component.css'
})

export class MovieComponentComponent {

  userobj:Movie=new Movie();
  addmovie()
  {
    var uname=this.userobj.moviename;
    let c = uname.length;
    
    if(c>0 )
    {
      console.log("Valid movie name")
    }
    else
    {
      console.log("Invalid user");
    }



}}

