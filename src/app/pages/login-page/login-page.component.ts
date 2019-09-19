import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {TestService} from '../../shared/services/test.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  flag = false;
  UserName = '';
  password = '';
  tvyal1 =  [];
  ogtater = [];
  id;
  user ;


  constructor(private testService: TestService, private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.testService.getContact1().subscribe((data: any) => {
     this.tvyal1 = data;
   });
  }
  login() {
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < this.tvyal1.length; j++) {
      if (this.UserName !== '' && this.password !== '' && this.UserName === this.tvyal1[j].username &&
        this.password === this.tvyal1[j].password) {
        this.authService.login();
        this.flag = true;
        const user =  {
          username: this.UserName,
          id: this.tvyal1[j].id,
          level1: false,
        };

        this.testService.getUser(user).subscribe((data: any[]) => {
          this.ogtater.push(data);
          location.reload();
        });
        this.router.navigate(['/test']);
      }
    }
  }

}

