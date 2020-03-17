import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';


@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  roles;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {

  }
  onRoles() {
    this.auth.getRoles().subscribe(
      data => {this.roles = data['hydra:member'];
               console.log(data['hydra:member']
        ); }
    );

  }

}
