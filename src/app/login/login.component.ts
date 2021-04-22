import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import {CaptchaService} from '../services/captcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  isLoggedIn = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public fService: FirebaseService,
    public captchaService: CaptchaService
  ) { }

  ngOnInit(): void {
  }

  async login(): Promise<void> {
    const { email, password } = this;
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password)
        .then(res => {
          this.isLoggedIn = true;
          this.fService.successMessage('Logged IN');
          this.router.navigate(['/home']);
          localStorage.setItem('user', JSON.stringify(res.user));
        });
    }
    catch (err) {
      this.fService.failureMessage(err.message);
    }
  }

  async resolved(captchaResponse: string): Promise<void> {
    console.log('Resolved response token:', captchaResponse);
    await this.sendTokenToBackend(captchaResponse);
  }

  sendTokenToBackend(token: string): void{
    this.captchaService.sendToken(token).subscribe(
        (data: any) => {
          console.log(data);
        },
        (err: any) => {
          console.log(err);
        },
        () => {}
    );
  }


}
