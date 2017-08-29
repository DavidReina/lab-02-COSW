import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html'

})

export class SignInPageComponent implements OnInit {
  	private usersService : UsersService;
	private signInForm : FormGroup;
	private router : Router;
	private loginError : string;
	constructor() {

  }
  ngOnInit() {
  }

doLogin() {
    this.usersService.login(
      this.signInForm.get('username').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['tasks']);
      }, error => {
        this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
      })
  }
}
