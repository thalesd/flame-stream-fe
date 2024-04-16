import { Component } from '@angular/core';
import { Register } from './register.models';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private httpClient: HttpClient) {}

  registerObj: Register = new Register();

  handleRegister(){
    this.httpClient
      .post('http://localhost:3000/register', this.registerObj)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
