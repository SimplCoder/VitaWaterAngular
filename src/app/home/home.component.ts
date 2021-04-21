import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uId = '';
  gameUrl: any = '';
  user: string | null = '';
  websiteUrl="";
  private sanitizer: DomSanitizer;

  constructor(sanitizer: DomSanitizer) {
    this.websiteUrl= "http://192.168.56.1:8000?uid";
    //this.websiteUrl= "https://vitawater3d.firebaseapp.com?uId";
    this.sanitizer = sanitizer;
    this.user = localStorage.getItem('user');
    let json: any;
    if (this.user != null) {
      json = JSON.parse(this.user);
    }
    this.uId = json.uid;
    this.gameUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.websiteUrl + this.uId);
  }

  ngOnInit(): void {

  }
}
