import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  loginClicked = false;

  constructor(private router: Router, accountService: AccountService) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

 

  goToLogout() {

  }
}
