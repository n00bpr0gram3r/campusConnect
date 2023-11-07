import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  isMenuRequire = true;
  isLoggedIn = false;
  isAdmin = true;
  constructor(private router: Router, private auth:AuthService) { }
  ngDoCheck(): void {
    
    if (this.auth.isLoggedIn()) {
      if(this.auth.isAdmin()){
        this.isAdmin = true;
      }
      this.isMenuRequire = false;
      this.isLoggedIn = true;
      // this.isAdmin = false;
    } else {
      this.isMenuRequire = true;
      this.isAdmin = false;
      this.isLoggedIn = false;
    }
  }

}
