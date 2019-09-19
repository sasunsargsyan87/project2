import {Component, OnInit} from '@angular/core';
import {TestService} from '../../shared/services/test.service';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  flag;
  flag1 = false;
  flag2 = false;
  flag3 = true;
  flag4 = true;
  flag5 = false;
  flag6 = false;
  flag7 = false;
  flag8 = false;
  flag9 = true;
  flag10 = false;
  flag11 = false;
  flag12 = true;
  flag13 = false;
  flag14 = false;
  flag15 = true;
  flag16 = false;
  flag17 = false;
  flag18 = true;
  flag19 = false;
  flag20 = false;
  flag21 = true;
  question1 = [];
  question2 = [];
  question3 = [];
  question4 = [];
  question5 = [];
  question6 = [];
  question7 = [];
  count;
  count1;
  count2;
  count3;
  count4;
  count5;
  count6;
  selectedAnswer = '';
  userAnswer = [];
  red = 'red';
  green = 'green';
  black = 'black';
  ogtaterner: any[] = [];
  level1;
  tvyal2 = [];
  tvyal3 = [];

  constructor(private testService: TestService, private autService: AuthService, private router: Router) {  }



  test1() {
    this.flag = 'test1';
    this.testService.getQuestion1().subscribe((data: any []) => {
      this.question1 = data;
    });
     }
  test2() {
    this.flag = 'test2';
    this.testService.getQuestion2().subscribe((data: any []) => {
      this.question2 = data;
    });
  }
  test3() {
    this.flag = 'test3';
    this.testService.getQuestion3().subscribe((data: any []) => {
      this.question3 = data;
    });
  }
  test4() {
    this.flag = 'test4';
    this.testService.getQuestion4().subscribe((data: any []) => {
      this.question4 = data;
    });
  }
  test5() {
    this.flag = 'test5';
    this.testService.getQuestion5().subscribe((data: any []) => {
      this.question5 = data;
    });
  }
  test6() {
    this.flag = 'test6';
    this.testService.getQuestion6().subscribe((data: any []) => {
      this.question6 = data;
    });
  }
  test7() {
    this.flag = 'test7';
    this.testService.getQuestion7().subscribe((data: any []) => {
      this.question7 = data;
    });
  }


  radioChange1(event) {
    // console.log(this.userAnswer);
    this.selectedAnswer = event.target.value;
    for (let k = 0; k < this.question1.length; k++) {
      if (this.selectedAnswer === this.question1[k].answer1 || this.selectedAnswer === this.question1[k].answer2 ||
        this.selectedAnswer === this.question1[k].answer3) {
        this.userAnswer[k] = this.selectedAnswer;
      }
    }
  }

  radioChange2(event) {
    this.selectedAnswer = event.target.value;
    for (let k=0; k<this.question2.length; k++){
      if (this.selectedAnswer === this.question2[k].answer1 || this.selectedAnswer === this.question2[k].answer2 || this.selectedAnswer === this.question2[k].answer3){
        this.userAnswer[k] = this.selectedAnswer;
      }
    }
  }

  radioChange3(event) {
    this.selectedAnswer = event.target.value;
    for (let k=0; k<this.question3.length; k++){
      if (this.selectedAnswer === this.question3[k].answer1 || this.selectedAnswer === this.question3[k].answer2 || this.selectedAnswer === this.question3[k].answer3){
        this.userAnswer[k] = this.selectedAnswer;
      }
    }
  }

  radioChange4(event) {
    this.selectedAnswer = event.target.value;
    for (let k=0; k<this.question4.length; k++){
      if (this.selectedAnswer === this.question4[k].answer1 || this.selectedAnswer === this.question4[k].answer2 || this.selectedAnswer === this.question4[k].answer3){
        this.userAnswer[k] = this.selectedAnswer;
      }
    }
  }

  radioChange5(event) {
    this.selectedAnswer = event.target.value;
    for (let k=0; k<this.question5.length; k++){
      if (this.selectedAnswer === this.question5[k].answer1 || this.selectedAnswer === this.question5[k].answer2 || this.selectedAnswer === this.question5[k].answer3){
        this.userAnswer[k] = this.selectedAnswer;
      }
    }
  }

  radioChange6(event) {
    this.selectedAnswer = event.target.value;
    for (let k=0; k<this.question6.length; k++){
      if (this.selectedAnswer === this.question6[k].answer1 || this.selectedAnswer === this.question6[k].answer2 || this.selectedAnswer === this.question6[k].answer3){
        this.userAnswer[k] = this.selectedAnswer;
      }
    }
  }

  radioChange7(event) {
    this.selectedAnswer = event.target.value;
    for (let k=0; k<this.question7.length; k++){
      if (this.selectedAnswer === this.question7[k].answer1 || this.selectedAnswer === this.question7[k].answer2 || this.selectedAnswer === this.question7[k].answer3){
        this.userAnswer[k] = this.selectedAnswer;
      }
    }
  }

  getColor(i) {
    if (this.question1[i].trueAnswer === this.question1[i].answer1 && this.flag1) {
      return this.green;
    }
    if (this.question1[i].answer1 === this.userAnswer[i] && this.userAnswer[i] !== this.question1[i].trueAnswer && this.flag1 ) {
      return this.red;
    }
    if (this.question1[i].answer1 !== this.userAnswer[i] && this.userAnswer[i] !== this.question1[i].trueAnswer && this.flag1 ) {
      return this.black;
    }
  }

  getColor1(i) {
    if ( this.question1[i].trueAnswer === this.question1[i].answer2 && this.flag1) {
      return this.green;
    }
    if (this.question1[i].answer2 === this.userAnswer[i] && this.userAnswer[i] !== this.question1[i].trueAnswer && this.flag1 ) {
      return this.red;
    }
    if (this.question1[i].answer2 !== this.userAnswer[i] && this.userAnswer[i] !== this.question1[i].trueAnswer && this.flag1) {
      return this.black;
    }
  }
  getColor2(i) {
    if ( this.question1[i].trueAnswer === this.question1[i].answer3 && this.flag1) {
      return this.green;
    }
    if (this.question1[i].answer3 === this.userAnswer[i] && this.userAnswer[i] !== this.question1[i].trueAnswer && this.flag1) {
      return this.red;
    }
    if (this.question1[i].answer3 !== this.userAnswer[i] && this.userAnswer[i] !== this.question1[i].trueAnswer && this.flag1) {
      return this.black;
    }
  }
  getColor3(i) {
    if (this.question2[i].trueAnswer === this.question2[i].answer1 && this.flag5) {
      return this.green;
    }
    if (this.question2[i].answer1 === this.userAnswer[i] && this.userAnswer[i] !== this.question2[i].trueAnswer && this.flag5 ){
      return this.red;
    }
    if(this.question2[i].answer1 !== this.userAnswer[i] && this.userAnswer[i] !== this.question2[i].trueAnswer && this.flag5 ) {
      return this.black;
    }
  }

  getColor4(i) {
    if ( this.question2[i].trueAnswer === this.question2[i].answer2 && this.flag5) {
      return this.green;
    }
    if (this.question2[i].answer2 === this.userAnswer[i] && this.userAnswer[i] !== this.question2[i].trueAnswer && this.flag5 ){
      return this.red;
    }
    if(this.question2[i].answer2 !== this.userAnswer[i] && this.userAnswer[i] !== this.question2[i].trueAnswer && this.flag5) {
      return this.black;
    }
  }
  getColor5(i) {
    if ( this.question2[i].trueAnswer === this.question2[i].answer3 && this.flag5) {
      return this.green;
    }
    if (this.question2[i].answer3 === this.userAnswer[i] && this.userAnswer[i] !== this.question2[i].trueAnswer && this.flag5){
      return this.red;
    }
    if (this.question2[i].answer3 !== this.userAnswer[i] && this.userAnswer[i] !== this.question2[i].trueAnswer && this.flag5) {
      return this.black;
    }
  }
  getColor6(i) {
    if (this.question3[i].trueAnswer === this.question3[i].answer1 && this.flag7) {
      return this.green;
    }
    if (this.question3[i].answer1 === this.userAnswer[i] && this.userAnswer[i] !== this.question3[i].trueAnswer && this.flag7 ){
      return this.red;
    }
    if(this.question3[i].answer1 !== this.userAnswer[i] && this.userAnswer[i] !== this.question3[i].trueAnswer && this.flag7 ) {
      return this.black;
    }
  }

  getColor7(i) {
    if ( this.question3[i].trueAnswer === this.question3[i].answer2 && this.flag7) {
      return this.green;
    }
    if (this.question3[i].answer2 === this.userAnswer[i] && this.userAnswer[i] !== this.question3[i].trueAnswer && this.flag7 ){
      return this.red;
    }
    if(this.question3[i].answer2 !== this.userAnswer[i] && this.userAnswer[i] !== this.question3[i].trueAnswer && this.flag7) {
      return this.black;
    }
  }
  getColor8(i) {
    if ( this.question3[i].trueAnswer === this.question3[i].answer3 && this.flag7) {
      return this.green;
    }
    if (this.question3[i].answer3 === this.userAnswer[i] && this.userAnswer[i] !== this.question3[i].trueAnswer && this.flag7){
      return this.red;
    }
    if (this.question3[i].answer3 !== this.userAnswer[i] && this.userAnswer[i] !== this.question3[i].trueAnswer && this.flag7) {
      return this.black;
    }
  }
  getColor9(i) {
    if (this.question4[i].trueAnswer === this.question4[i].answer1 && this.flag10) {
      return this.green;
    }
    if (this.question4[i].answer1 === this.userAnswer[i] && this.userAnswer[i] !== this.question4[i].trueAnswer && this.flag10 ){
      return this.red;
    }
    if(this.question4[i].answer1 !== this.userAnswer[i] && this.userAnswer[i] !== this.question4[i].trueAnswer && this.flag10 ) {
      return this.black;
    }
  }

  getColor10(i) {
    if ( this.question4[i].trueAnswer === this.question4[i].answer2 && this.flag10) {
      return this.green;
    }
    if (this.question4[i].answer2 === this.userAnswer[i] && this.userAnswer[i] !== this.question4[i].trueAnswer && this.flag10 ){
      return this.red;
    }
    if(this.question4[i].answer2 !== this.userAnswer[i] && this.userAnswer[i] !== this.question4[i].trueAnswer && this.flag10) {
      return this.black;
    }
  }
  getColor11(i) {
    if ( this.question4[i].trueAnswer === this.question4[i].answer3 && this.flag10) {
      return this.green;
    }
    if (this.question4[i].answer3 === this.userAnswer[i] && this.userAnswer[i] !== this.question4[i].trueAnswer && this.flag10){
      return this.red;
    }
    if (this.question4[i].answer3 !== this.userAnswer[i] && this.userAnswer[i] !== this.question4[i].trueAnswer && this.flag10) {
      return this.black;
    }
  }
  getColor12(i) {
    if (this.question5[i].trueAnswer === this.question5[i].answer1 && this.flag13) {
      return this.green;
    }
    if (this.question5[i].answer1 === this.userAnswer[i] && this.userAnswer[i] !== this.question5[i].trueAnswer && this.flag13 ){
      return this.red;
    }
    if(this.question5[i].answer1 !== this.userAnswer[i] && this.userAnswer[i] !== this.question5[i].trueAnswer && this.flag13 ) {
      return this.black;
    }
  }

  getColor13(i) {
    if ( this.question5[i].trueAnswer === this.question5[i].answer2 && this.flag13) {
      return this.green;
    }
    if (this.question5[i].answer2 === this.userAnswer[i] && this.userAnswer[i] !== this.question5[i].trueAnswer && this.flag13 ){
      return this.red;
    }
    if(this.question5[i].answer2 !== this.userAnswer[i] && this.userAnswer[i] !== this.question5[i].trueAnswer && this.flag13) {
      return this.black;
    }
  }
  getColor14(i) {
    if ( this.question5[i].trueAnswer === this.question5[i].answer3 && this.flag13) {
      return this.green;
    }
    if (this.question5[i].answer3 === this.userAnswer[i] && this.userAnswer[i] !== this.question5[i].trueAnswer && this.flag13){
      return this.red;
    }
    if (this.question5[i].answer3 !== this.userAnswer[i] && this.userAnswer[i] !== this.question5[i].trueAnswer && this.flag13) {
      return this.black;
    }
  }
  getColor15(i) {
    if (this.question6[i].trueAnswer === this.question6[i].answer1 && this.flag16) {
      return this.green;
    }
    if (this.question6[i].answer1 === this.userAnswer[i] && this.userAnswer[i] !== this.question6[i].trueAnswer && this.flag16 ){
      return this.red;
    }
    if(this.question6[i].answer1 !== this.userAnswer[i] && this.userAnswer[i] !== this.question6[i].trueAnswer && this.flag16 ) {
      return this.black;
    }
  }

  getColor16(i) {
    if ( this.question6[i].trueAnswer === this.question6[i].answer2 && this.flag16) {
      return this.green;
    }
    if (this.question6[i].answer2 === this.userAnswer[i] && this.userAnswer[i] !== this.question6[i].trueAnswer && this.flag16 ){
      return this.red;
    }
    if(this.question6[i].answer2 !== this.userAnswer[i] && this.userAnswer[i] !== this.question6[i].trueAnswer && this.flag16) {
      return this.black;
    }
  }
  getColor17(i) {
    if ( this.question6[i].trueAnswer === this.question6[i].answer3 && this.flag16) {
      return this.green;
    }
    if (this.question6[i].answer3 === this.userAnswer[i] && this.userAnswer[i] !== this.question6[i].trueAnswer && this.flag16){
      return this.red;
    }
    if (this.question6[i].answer3 !== this.userAnswer[i] && this.userAnswer[i] !== this.question6[i].trueAnswer && this.flag16) {
      return this.black;
    }
  }
  getColor18(i) {
    if (this.question7[i].trueAnswer === this.question7[i].answer1 && this.flag19) {
      return this.green;
    }
    if (this.question7[i].answer1 === this.userAnswer[i] && this.userAnswer[i] !== this.question7[i].trueAnswer && this.flag19 ){
      return this.red;
    }
    if(this.question7[i].answer1 !== this.userAnswer[i] && this.userAnswer[i] !== this.question7[i].trueAnswer && this.flag19 ) {
      return this.black;
    }
  }

  getColor19(i) {
    if ( this.question7[i].trueAnswer === this.question7[i].answer2 && this.flag19) {
      return this.green;
    }
    if (this.question7[i].answer2 === this.userAnswer[i] && this.userAnswer[i] !== this.question7[i].trueAnswer && this.flag19 ){
      return this.red;
    }
    if(this.question7[i].answer2 !== this.userAnswer[i] && this.userAnswer[i] !== this.question7[i].trueAnswer && this.flag19) {
      return this.black;
    }
  }
  getColor20(i) {
    if ( this.question7[i].trueAnswer === this.question7[i].answer3 && this.flag19) {
      return this.green;
    }
    if (this.question7[i].answer3 === this.userAnswer[i] && this.userAnswer[i] !== this.question7[i].trueAnswer && this.flag19){
      return this.red;
    }
    if (this.question7[i].answer3 !== this.userAnswer[i] && this.userAnswer[i] !== this.question7[i].trueAnswer && this.flag19) {
      return this.black;
    }
  }

  verify1(o) {
    this.count = 0;
    for (let j = 0; j < this.userAnswer.length; j++) {
      if (this.userAnswer[j] === this.question1[j].trueAnswer) {
        this.count++;
      }
    }
    this.flag1 = !this.flag1;
    this.flag2 = !this.flag2;
    if (this.count > 4) {
      this.flag3 = false;
      o.level1 = true;
      this.testService.updateContact2(o).subscribe();
    }
    return this.count;

  }

  verify2(o) {
    this.count1 = 0;
    for (let j = 0; j < this.userAnswer.length; j++) {
      if (this.userAnswer[j] === this.question2[j].trueAnswer) {
        this.count1++;
      }
    }
    this.flag5 = !this.flag5;
    this.flag6 = !this.flag6;
    if (this.count1 > 4) {
      this.flag4 = false;
      o.level2 = true;
      this.testService.updateContact2(o).subscribe();
    }
    return this.count1;
  }

  verify3(o) {
    this.count2 = 0;
    for (let j = 0; j < this.userAnswer.length; j++) {
      if (this.userAnswer[j] === this.question3[j].trueAnswer)
        this.count2++;
    }
    this.flag7 = !this.flag7;
    this.flag8 = !this.flag8;
    if(this.count2>4) {
      this.flag9 = false;
      o.level3 = true;
      this.testService.updateContact2(o).subscribe();
    }
    return this.count2;
  }

  verify4(o) {
    this.count3 = 0;
    for (let j = 0; j < this.userAnswer.length; j++) {
      if (this.userAnswer[j] === this.question4[j].trueAnswer)
        this.count3++;
    }
    this.flag10 = !this.flag10;
    this.flag11 = !this.flag11;
    if(this.count3>4){
      this.flag12 = false;
      o.level4 = true;
      this.testService.updateContact2(o).subscribe();
    }
    return this.count3;
  }

  verify5(o) {
    this.count4 = 0;
    for (let j = 0; j < this.userAnswer.length; j++) {
      if (this.userAnswer[j] === this.question5[j].trueAnswer)
        this.count4++;
    }
    this.flag13 = !this.flag13;
    this.flag14 = !this.flag14;
    if(this.count4>4){
      this.flag15 = false;
      o.level5 = true;
      this.testService.updateContact2(o).subscribe();
    }
    return this.count4;
  }

  verify6(o) {
    this.count5 = 0;
    for (let j = 0; j < this.userAnswer.length; j++) {
      if (this.userAnswer[j] === this.question6[j].trueAnswer)
        this.count5++;
    }
    this.flag16 = !this.flag16;
    this.flag17 = !this.flag17;
    if(this.count5>4){
      this.flag18 = false;
      o.level6 = true;
      this.testService.updateContact2(o).subscribe();
    }
    return this.count5;
  }

  verify7(o) {
    this.count6 = 0;
    for (let j = 0; j < this.userAnswer.length; j++) {
      if (this.userAnswer[j] === this.question7[j].trueAnswer)
        this.count6++;
    }
    this.flag19 = !this.flag19;
    this.flag20 = !this.flag20;
    o.level7 = true;
    this.testService.updateContact2(o).subscribe();
    return this.count6;
  }


  ngOnInit() {
    this.testService.getUser1().subscribe((data: any[]) => {
      this.ogtaterner = data;
      // tslint:disable-next-line:no-shadowed-variable
      this.testService.getContact1().subscribe((data: any[]) => {
        this.tvyal2 = data;
        for (let i = 0; i < this.tvyal2.length; i++) {
          if (this.tvyal2[i].id === this.ogtaterner[0].id)
            this.tvyal3.push(this.tvyal2[i]);
        }
        for(let j = 0; j < this.tvyal3.length; j++) {
          if(this.tvyal3[0].level1 === true)
            this.flag3 = false;
        }
        for(let j = 0; j < this.tvyal3.length; j++) {
          if(this.tvyal3[0].level2 === true)
            this.flag4 = false;
        }
        for(let j = 0; j < this.tvyal3.length; j++) {
          if(this.tvyal3[0].level3 === true)
            this.flag9 = false;
        }
        for(let j = 0; j < this.tvyal3.length; j++) {
          if(this.tvyal3[0].level4 === true)
            this.flag12 = false;
        }
        for(let j = 0; j < this.tvyal3.length; j++) {
          if(this.tvyal3[0].level5 === true)
            this.flag15 = false;
        }
        for(let j = 0; j < this.tvyal3.length; j++) {
          if(this.tvyal3[0].level6 === true)
            this.flag18 = false;
        }
        for(let j = 0; j < this.tvyal3.length; j++) {
          if(this.tvyal3[0].level7 === true)
            this.flag21 = false;
        }
      });

    });

  }

  logout(ogt) {
    this.autService.logout();

    this.router.navigate(['/']);
    // @ts-ignore
    this.testService.deleteUser(ogt).subscribe((data: any[]) => {
      this.ogtaterner = data;
    });

  }
}

