import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDs3q-i7tsLtpy0vUJJ6Ejbk6LxeTQ6GiA",
  authDomain: "vitawater-9b375.firebaseapp.com",
  projectId: "vitawater-9b375",
  storageBucket: "vitawater-9b375.appspot.com",
  messagingSenderId: "395378570353",
  appId: "1:395378570353:web:24e79d456148a69d3c97d0",
  measurementId: "G-H4R6RN498J"
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

