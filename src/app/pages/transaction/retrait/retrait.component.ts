import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../../services/transaction.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PartenaireService} from '../../../services/partenaire.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  constructor(private transaction: TransactionService, private ps: PartenaireService,  private router: Router, private formBuilder: FormBuilder) {
  }
  retraitForm: FormGroup;
  searchForm: FormGroup;
  dataSearch: any;
  roles: string;
  submitted = false;
  comptes: any;
  dataRetrait  = [];
  ngOnInit() {
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.searchForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
    });
    this.retraitForm = this.formBuilder.group({
      npieceB: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      numCompte: ['']
    });
    this.ps.getCompte().subscribe( data => {
      this.comptes = data;
    });
  }
  onSubmitSearch() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    const search = {
      code: this.searchForm.value.code
    };
    this.transaction.getCode(search).subscribe( data => {
      this.dataSearch = data;
    }, error => {
    alert(JSON.stringify(error));
    });
  }
  onSubmitForm() {
    this.submitted = true;
    if (this.retraitForm.invalid) {
      return;
    }
    const retrait = {
      npieceB: this.retraitForm.value.npieceB,
      code: this.searchForm.value.code,
      numCompte: this.retraitForm.value.numCompte

    };
    this.transaction.retrait(retrait).subscribe(data => {
      this.dataRetrait = data;
      alert(JSON.stringify(data));
      localStorage.setItem('dataRetrait', JSON.stringify(this.dataRetrait));
      return this.router.navigate(['pdf-recu']);
    }, error => {
      alert(JSON.stringify(error));
    });
  }
  isPartenaire() {
    if ( this.roles[0] === 'ROLE_PARTENAIRE' || this.roles[0] === 'ROLE_ADMIN_PARTENAIRE') {
      return true;
    }
  }
  get f() { return this.searchForm.controls; }
  get g() { return this.retraitForm.controls; }
}
