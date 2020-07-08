import {Component, OnInit, ViewChild} from '@angular/core';
import {PartenaireService} from '../../../services/partenaire.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-list-partenaire',
  templateUrl: './list-partenaire.component.html',
  styleUrls: ['./list-partenaire.component.scss']
})
export class ListPartenaireComponent implements OnInit {
  partenaires = [];
  dataPartenaire: any;
  roles: string;
  email: string;
  constructor(private ps: PartenaireService, private us: UsersService, private route: Router ) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'prenom', 'nom', 'email', 'role', 'isActive', 'ninea', 'rc'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.ps.getPartenaire()
      .subscribe( data => {
        this.partenaires.push(this.partenaires);
        this.dataPartenaire = data;
        console.log(data);
        this.listData = new MatTableDataSource(this.dataPartenaire);
        this.listData.paginator = this.paginator;
      });
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.email = JSON.parse(localStorage.getItem('username'));
  }
  isAdmin() {
    if ( this.roles[0] === 'ROLE_SUPER_ADMIN' || this.roles[0] === 'ROLE_ADMIN') {
      return true;
    }
  }
  isPartenaire() {
    if ( this.roles[0] === 'ROLE_PARTENAIRE' || this.roles[0] === 'ROLE_ADMIN_PARTENAIRE') {
      return true;
    }
  }
  isCaissier() {
    if ( this.roles[0] === 'ROLE_CAISSIER') {
      return true;
    }
  }
  isUserPartenaire() {
    if ( this.roles[0] === 'ROLE_USER_PARTENAIRE') {
      return true;
    }
  }
  onStatus(id: number) {
   this.us.desablePartenaire(id).subscribe(data => {
      alert(JSON.stringify(data));
      location.reload();
    });
  }
}
