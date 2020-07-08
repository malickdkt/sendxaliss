import {Component, OnInit, ViewChild} from '@angular/core';
import {PartenaireService} from '../../../services/partenaire.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.scss']
})
export class ListCompteComponent implements OnInit {

  constructor(private ps: PartenaireService ) { }
  compte = [];
  dataCompte: any;
  roles: string;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'partenaire', 'numCompte', 'solde', 'createdAt']
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.ps.getCompte()
      .subscribe( data => {
        this.compte.push(this.compte);
        this.dataCompte = data;
        this.listData = new MatTableDataSource(this.dataCompte);
        this.listData.paginator = this.paginator;
      });
    this.roles = JSON.parse(localStorage.getItem('roles'));
  }
  isAdmin() {
    if ( this.roles[0] === 'ROLE_SUPER_ADMIN' || this.roles[0] === 'ROLE_ADMIN') {
      return true;
    }
  }
}
