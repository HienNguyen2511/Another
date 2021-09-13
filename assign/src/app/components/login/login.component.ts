import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "email": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('', [Validators.required, Validators.pattern('[a-zA-z0-9]*')])
    })
  }

  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      alert("Log In Success");
      this.loginForm.reset();
      this.router.navigate(['course']);
    }

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password')
  }

}
