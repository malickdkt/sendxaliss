import { User } from './../../models/User';
import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {

  formConnexion: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthentificationService, private route: Router) { }

  ngOnInit(): void {
    this.formConnexion = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onConnexion() {
     const user = {
       email: this.formConnexion.value.email,
       password: this.formConnexion.value.password,
    } as User;
     console.log(this.formConnexion.value);
     this.auth.getConnexion(user).subscribe(
       // tslint:disable-next-line: variable-name
       _data => {
       return this.route.navigate(['/dasboard']);
       },
       error => {
       console.log(error);
       }

     );
  }

}
