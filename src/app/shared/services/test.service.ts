import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {
  }

  getQuestion1() {
    return this.http.get('http://localhost:3000/question1');
  }

  getQuestion2() {
    return this.http.get('http://localhost:3000/question2');
  }

  getQuestion3() {
    return this.http.get('http://localhost:3000/question3');
  }

  getQuestion4() {
    return this.http.get('http://localhost:3000/question4');
  }

  getQuestion5() {
    return this.http.get('http://localhost:3000/question5');
  }

  getQuestion6() {
    return this.http.get('http://localhost:3000/question6');
  }

  getQuestion7() {
    return this.http.get('http://localhost:3000/question7');
  }

  getContact(reg) {
    return this.http.post('http://localhost:3000/tvyal', reg);
  }

  getContact1() {
    return this.http.get('http://localhost:3000/tvyal');
  }

  // getLevel(lvlfor) {
  //   return this.http.post('http://localhost:3000/tvyal', lvlfor);
  // }
  getUser(user) {
    return this.http.post('http://localhost:3000/ogtater', user);
  }

  getUser1() {
    return this.http.get('http://localhost:3000/ogtater');
  }
 deleteUser(ogt) {
    return this.http.delete('http://localhost:3000/ogtater/' + ogt.id, ogt);
  }
  updateContact2(o){
    return this.http.put('http://localhost:3000/tvyal/' + o.id , o);
  }
}
