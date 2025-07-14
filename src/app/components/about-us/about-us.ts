import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-about-us',
  standalone:true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './about-us.html',
styleUrls: ['./about-us.css']
})
export class AboutUs {

}
