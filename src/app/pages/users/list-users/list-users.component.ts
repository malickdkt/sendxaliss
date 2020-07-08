import { AuthentificationService } from './../../../services/authentification.service';
import {Router} from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users = [];
  dataUser: any;
  constructor(private userService: UsersService, private route: Router, private authService: AuthentificationService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'prenom', 'nom', 'email', 'role', 'isActive', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.userService.read()
      .subscribe( data => {
        this.users.push(this.users);
        this.dataUser = data;
        this.listData = new MatTableDataSource(this.dataUser);
        this.listData.paginator = this.paginator;
      });
  }
  deletePost(id: number) {
    if ( confirm('Etes vous  sur de vouloir supprimer cet utlisateur')) {
      this.userService.delete(id).subscribe(data => {
        location.reload();
      });
    }
  }

  onStatus(id: number) {
    this.userService.desableUser(id).subscribe(data => {
      alert(JSON.stringify(data));
      location.reload();
    });
  }
  getId(id: number) {
    this.route.navigate(['/edit', id]);
  }
}
