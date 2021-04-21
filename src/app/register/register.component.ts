import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserInformation } from '../services/app.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDetails: UserInformation = {
    id: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: ''
  };

  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public fService: FirebaseService,
    private afStore: AngularFirestore
  ) { }

  ngOnInit(): void {
  }

  async register(): Promise<void> {
    this.email = this.userDetails.email;
    const { email, password, confirmPassword } = this;
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password);
      if (res.user) {
        this.userDetails.id = res.user.uid;
        this.afStore.doc(`registerUsersData/${res.user.uid}`).set(
          this.userDetails
        );
        res.user.sendEmailVerification().then(() => {
          this.fService.successMessage('Please validate your email address. Kindly check your email inbox');
        });
        this.router.navigate(['/login']);
      }
    } catch (err) {
        this.fService.failureMessage(err.message);
    }
  }

}
