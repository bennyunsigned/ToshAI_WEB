import { Component } from '@angular/core';
import { SignupComponent } from "../../components/Auth/signup/signup.component";
import { LoginComponent } from '../../components/Auth/login/login.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styles: ``
})
export class AuthLayoutComponent {

}
