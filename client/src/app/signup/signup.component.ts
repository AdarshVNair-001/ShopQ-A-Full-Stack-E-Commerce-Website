import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private objauthService: AuthService,private objrouter:Router) { }

  ngOnInit(): void {

  }

  signupmodel={
    username:'',
    email:'',
    password:''
  }

  showPassword = false;
  showPopup = false;
  popupType = '';
  popupMessage = '';
  

togglePassword() {
  this.showPassword = !this.showPassword;
}
showRePassword = false;

toggleRePassword() {
  this.showRePassword = !this.showRePassword;
}
CreateAccount() {
  this.objauthService.CreateAccountService(this.signupmodel).subscribe({

    next: () => {

        this.popupType = 'success';
        this.popupMessage = 'Account created successfully.';
        this.showPopup = true;

    },

    error: () => {

        this.popupType = 'error';
        this.popupMessage = 'Unable to create account.';
        this.showPopup = true;

    }

});
}
closePopup() {
  this.showPopup = false;
  if(this.popupType=='success')
  {
    this.objrouter.navigate(['/login']);
  }
}
}
