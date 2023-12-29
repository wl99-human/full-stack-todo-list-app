import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  authenticate(username: string, password: string) {
    console.log("Before: " + this.isUserLoggedIn());
    if (username === "wl99-human" && password === "dummy") {
      if (isPlatformBrowser(this.platformId)) {
        sessionStorage.setItem('authenticatedUser', username);
      }
      console.log("After: " + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = null;
    if (isPlatformBrowser(this.platformId)) {
      user = sessionStorage.getItem('authenticatedUser');
    }
    return !(user === null);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('authenticatedUser');
    }
  }
}
