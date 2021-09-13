import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: any

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      //required information
      "firstName": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "lastName": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "phone": new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    })
  }

  signUp() {
    console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      alert("Sign Up Success");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }
  }

  get firstname() {
    return this.signupForm.get('firstName');
  }

  get lastname() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get phoneNumber() {
    return this.signupForm.get('phone');
  }

}

