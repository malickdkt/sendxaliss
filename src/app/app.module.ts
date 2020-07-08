import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptorService } from './helpers/jwt-interceptor.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultComponent } from './components/default/default.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddCompteComponent } from './pages/compte/add-compte/add-compte.component';
import { ListCompteComponent } from './pages/compte/list-compte/list-compte.component';
import { AddUsersComponent } from './pages/users/add-users/add-users.component';
import { ListUsersComponent } from './pages/users/list-users/list-users.component';
import { ListDepotComponent } from './pages/depot/list-depot/list-depot.component';
import { RetraitComponent } from './pages/transaction/retrait/retrait.component';
import { AddDepotComponent } from './pages/depot/add-depot/add-depot.component';
import { PartenaireExistantComponent } from './pages/compte/partenaire-existant/partenaire-existant.component';
import { ListPartenaireComponent } from './pages/partenaire/list-partenaire/list-partenaire.component';
import { ListUserPartenaireComponent } from './pages/partenaire/list-user-partenaire/list-user-partenaire.component';
import { UserPartenaireComponent } from './pages/partenaire/user-partenaire/user-partenaire.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EnvoiComponent } from './pages/transaction/envoi/envoi.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { AddAffectationComponent } from './pages/affectation/add-affectation/add-affectation.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { ContratComponent } from './pages/contrat/contrat.component';
import { RecuComponent } from './pages/recu/recu.component';
import { ListeEnvoiComponent } from './pages/transaction/liste-envoi/liste-envoi.component';
import { ListeRetraitComponent } from './pages/transaction/liste-retrait/liste-retrait.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { _MatMenuDirectivesModule, MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPartComponent } from './pages/parts/list-part/list-part.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormConnexionComponent,
    NavbarComponent,
    SidebarComponent,
    DefaultComponent,
    DasboardComponent,
    FooterComponent,
    AddCompteComponent,
    ListCompteComponent,
    AddUsersComponent,
    ListUsersComponent,
    ListDepotComponent,
    RetraitComponent,
    AddDepotComponent,
    PartenaireExistantComponent,
    ListPartenaireComponent,
    ListUserPartenaireComponent,
    UserPartenaireComponent,
    PageNotFoundComponent,
    EnvoiComponent,
    EditUserComponent,
    AddAffectationComponent,
    ContratComponent,
    RecuComponent,
    ListeEnvoiComponent,
    ListeRetraitComponent,
    ListPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    _MatMenuDirectivesModule,
    MatInputModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    ListUsersComponent, AddUsersComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
