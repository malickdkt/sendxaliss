import {Component, OnInit, ViewChild} from '@angular/core';
import {TransactionService} from '../../../services/transaction.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-liste-retrait',
  templateUrl: './liste-retrait.component.html',
  styleUrls: ['./liste-retrait.component.scss']
})
export class ListeRetraitComponent implements OnInit {

  dataListeRetrait: any;
  envois = [];
  constructor(private  transaction: TransactionService) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['prenomE', 'nomE', 'telephoneE',
    'npieceE', 'prenomB', 'nomB', 'telephoneB', 'npieceB',
    'montant', 'dateEnvoi', 'dateRetrait'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.transaction.getListeRetrait().subscribe(data => {
      this.dataListeRetrait = data;
      this.envois.push(this.envois);
      this.dataListeRetrait = data;
      this.listData = new MatTableDataSource(this.dataListeRetrait);
      this.listData.paginator = this.paginator;
    }, error => {
      console.log(error);
    });
  }

}
