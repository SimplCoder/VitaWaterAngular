import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  isLoggedIn = false;
  showLoader = new Subject<boolean>();

  constructor(private toastrService: ToastrService) {
  }

  successMessage(msg: string): void {
    this.toastrService.success(msg, '', {
      closeButton: true,
      timeOut: 2000
    });
  }

  failureMessage(msg: string): void {
    this.toastrService.error(msg, '', {
      closeButton: true,
      timeOut: 2000
    });
  }

}
