import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 usernameControl = new FormControl();
 passwordControl = new FormControl();


constructor() { }

  ngOnInit() {
    // setInterval(() => {
    //     console.log('Data from form is ', this.usernameField.nativeElement.value, this.passwordField.nativeElement.value);
    //    }, 3000);

    this.usernameControl.valueChanges
      .filter( username => username.length > 3)
      .debounceTime(2000)
      .distinctUntilChanged()
      .map(username => 'Dear ' + username)
      .subscribe(filterUsername => {
        console.log("Search for result" + filterUsername);
        });
  }
  login(username: string, password: string) {
    console.log("form submitted", username, password);

    // username.value = '';
    // password.value = '';
  }
}
