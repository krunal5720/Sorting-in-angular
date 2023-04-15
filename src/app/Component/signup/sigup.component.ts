import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignUpModel } from 'src/Model/SignUpModel';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {
signUpDetails : any = new SignUpModel();
signupForm : FormGroup | any;

constructor() {
  this.signupForm = new FormGroup({
    firstName: new FormControl()
  });
}
signUp(signUpDetails : any)
{
  console.log(signUpDetails);
}
}
