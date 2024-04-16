import { Component } from '@angular/core';
import { LogIn } from './login.models';
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

  loginObj: LogIn = new LogIn();

  handleLogin() {
    this.httpClient
      .post('http://localhost:3000/login', this.loginObj)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
