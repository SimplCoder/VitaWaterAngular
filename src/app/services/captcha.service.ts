import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CaptchaService {

    constructor(private $httpClient: HttpClient) { }

    sendToken(token: string): any{
        return this.$httpClient.post<any>('https://us-central1-vitawater-9b375.cloudfunctions.net/token_validate', {recaptcha: token});
    }
}
