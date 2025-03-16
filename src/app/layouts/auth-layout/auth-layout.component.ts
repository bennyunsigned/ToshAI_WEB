import { Component } from '@angular/core';
import { SignupComponent } from "../../components/Auth/signup/signup.component";
import { LoginComponent } from '../../components/Auth/login/login.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styles: ``,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AuthLayoutComponent {

}
