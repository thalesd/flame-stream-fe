import { Component } from '@angular/core';
import { LogIn, SignUp } from './login.models';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private httpClient: HttpClient) {}

  isSignInVisible: boolean = true;

  signUpObj: SignUp = new SignUp();
  loginObj: LogIn = new LogIn();

  handleLogin() {
    this.httpClient
      .post('http://localhost:3000/login', this.loginObj)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
