import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';


@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  roles: string;
  email: string;
  constructor() { }

  ngOnInit(): void {
    this.roles = JSON.parse(localStorage.getItem('roles'));

  }

  isAdmin() {
    if (this.roles[0] === 'ROLE_SUPER_ADMIN' || this.roles[0] === 'ROLE_ADMIN') {
      return true;
    }
  }
  isPartenaire() {
    if (this.roles[0] === 'ROLE_PARTENAIRE' || this.roles[0] === 'ROLE_ADMIN_PARTENAIRE') {
      return true;
    }
  }
  isCaissier() {
    if (this.roles[0] === 'ROLE_CAISSIER' || this.roles[0] === 'ROLE_CAISSIER_PARTENAIRE') {
      return true;
    }
  }
  isUserPartenaire() {
    if (this.roles[0] === 'ROLE_USER_PARTENAIRE') {
      return true;
    }
  }

}
