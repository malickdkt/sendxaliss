import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private  authentificationService: AuthentificationService, private  route: Router) { }

  ngOnInit() {
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.authentificationService.logout();
    return this.route.navigate(['login']);
  }
}

