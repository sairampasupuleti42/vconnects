import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'cncts-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private router: Router, private accSvc: AccountService, private fb: FormBuilder) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      userName: new FormControl(),
      password: new FormControl()
    });
  }

  btnSigninAction() {
    this.accSvc.signIn(this.signInForm.value).subscribe((signInResp: any) => {
      if (signInResp) {
        console.log('logged in');
        localStorage.setItem('cnctsU', signInResp.cnctsUser.userId);
        localStorage.setItem('cnctsUn', signInResp.cnctsUser.fullName);
        console.log('saved');
        this.router.navigate(['/']);
      }
    });
    return;
  }
}
