import { Component } from '@angular/core';
import { LoginModel } from 'src/Model/LoginModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  loginDetails : any = new LoginModel();
  constructor(private router: Router) {}

  login(loginDetails: any){
    console.log(loginDetails)
    if(loginDetails.emailAddress == 'krunal' && loginDetails.password=='1234'){
      this.router.navigate(['/register']);
    }
  }
}
