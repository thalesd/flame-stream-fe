export class Register {
    username: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
  
    constructor(){
      this.username = "";
      this.password = "";
      this.confirmPassword = "";
      this.agreeToTerms = false;
    }
  }