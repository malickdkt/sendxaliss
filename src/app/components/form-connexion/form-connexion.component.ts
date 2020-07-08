import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {

  formConnexion: FormGroup;
  errorMessage: string;
  constructor(private auth: AuthentificationService, private route: Router, private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.formConnexion =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
    onConnexion() {
    const  user = {
      email: this.formConnexion.value.email,
      password: this.formConnexion.value.password,
    };
    this.auth.getConnexion(user).subscribe(
      data => {
        return this.route.navigate(['/dasboard']);
      },
      error => {
       /* this.errorMessage = 'Email ou mot de passe incorrect';*/
        alert(JSON.stringify(error));
      });
  }
}
