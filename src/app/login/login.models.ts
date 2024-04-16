export class LogIn {
  username: string;
  password: string;
  keepLoggedIn: boolean;

  constructor() {
    this.username = '';
    this.password = '';
    this.keepLoggedIn = false;
  }
}
