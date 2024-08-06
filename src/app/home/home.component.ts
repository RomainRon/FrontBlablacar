import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../form/login/login.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

