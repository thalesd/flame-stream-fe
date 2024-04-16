export class SignUp {
    username: string;
    password: string;
    confirmPassword: string;
  
    constructor(){
      this.username = "";
      this.password = "";
      this.confirmPassword = "";
    }
  }
  
  export class LogIn {
    username: string;
    password: string;
    keepLoggedIn: boolean;
  
    constructor(){
      this.username = "";
      this.password = "";
      this.keepLoggedIn = false;
    }
  }