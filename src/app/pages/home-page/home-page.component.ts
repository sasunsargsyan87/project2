import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TestService} from '../../shared/services/test.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  form: FormGroup;
  newName = '';
  newLastName = '';
  newUserName = '';
  newPassword = '';
  newEmail = '';
  newPhoneNumber = '';
  newAnswer = '';
  tvyal = [];
  contact = [];
  flag = true;
  constructor(private router: Router, private testService: TestService, private http: HttpClient) { }
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      answer: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.newName !== '' && this.newLastName !== '' && this.newUserName !== '' && this.newPassword !== '' && this.newEmail !== ''
      && this.newPhoneNumber !== '' && this.newAnswer !== '') {
      this.contact.push({
        name: this.newName,
        lastname: this.newLastName,
        username: this.newUserName,
        password: this.newPassword,
        email: this.newEmail,
        phoneNumber: this.newPhoneNumber,
        answer: this.newAnswer
      });
    }
    this.router.navigate(['/login']);
    this.flag = !this.flag;
    console.log(this.contact);
    const reg = ({
      username: this.newUserName,
      password: this.newPassword,
      email: this.newEmail,
      name: this.newName,
      lastname: this.newLastName,
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: false,
      level6: false,
      level7: false,
    });

    this.testService.getContact(reg).subscribe((data) => {
      this.tvyal.push(data);
    });
    console.log(this.tvyal);
    this.newUserName = '';
    this.newPassword = '';
    this.newEmail = '';
  }

}
