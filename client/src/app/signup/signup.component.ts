import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  showPassword = false;

togglePassword() {
  this.showPassword = !this.showPassword;
}
showRePassword = false;

toggleRePassword() {
  this.showRePassword = !this.showRePassword;
}

}
