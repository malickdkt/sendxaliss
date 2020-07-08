import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleService} from '../../../services/role.service';
import {Users} from '../../../models/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {


  userForm: FormGroup;
  roles: any;
  selected: string;
  users: any;
  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private router: Router,
              private role: RoleService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
    this.role.getRole().subscribe(data => {
      this.roles = data;
    });
    this.route.params.subscribe(params => {
      this.usersService.getId(params.id).subscribe(data => {
        this.userForm.patchValue(data);
        this.selected = this.userForm.value.role.libelle;
      });
    });
  }
  onSubmitForm() {
    const  users = {
      prenom: this.userForm.value.prenom,
      nom: this.userForm.value.nom,
      email: this.userForm.value.email,
      role: `/api/roles/${this.userForm.value.role}`
    };
    this.usersService.update(users).subscribe( data => {
     console.log(data);
   }, error => {
     console.log(error);
   });
  }

}
