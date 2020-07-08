import { EnvoiComponent } from './pages/transaction/envoi/envoi.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { AddUsersComponent } from './pages/users/add-users/add-users.component';
import { AddCompteComponent } from './pages/compte/add-compte/add-compte.component';
import { ListCompteComponent } from './pages/compte/list-compte/list-compte.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ListUsersComponent } from './pages/users/list-users/list-users.component';
import { RetraitComponent } from './pages/transaction/retrait/retrait.component';
import { PartenaireExistantComponent } from './pages/compte/partenaire-existant/partenaire-existant.component';
import { AddDepotComponent } from './pages/depot/add-depot/add-depot.component';
import { UserPartenaireComponent } from './pages/partenaire/user-partenaire/user-partenaire.component';
import { ListUserPartenaireComponent } from './pages/partenaire/list-user-partenaire/list-user-partenaire.component';
import { ListDepotComponent } from './pages/depot/list-depot/list-depot.component';
import { ListPartenaireComponent } from './pages/partenaire/list-partenaire/list-partenaire.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { AddAffectationComponent } from './pages/affectation/add-affectation/add-affectation.component';
import { RecuComponent } from './pages/recu/recu.component';
import { ContratComponent } from './pages/contrat/contrat.component';
import { ListeRetraitComponent } from './pages/transaction/liste-retrait/liste-retrait.component';
import { ListeEnvoiComponent } from './pages/transaction/liste-envoi/liste-envoi.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { ListPartComponent } from "./pages/parts/list-part/list-part.component";


const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: 'dasboard', component: DasboardComponent },
      { path: 'list-users', component: ListUsersComponent, canActivate: [AuthGuardService] },
      { path: 'add-users', component: AddUsersComponent, canActivate: [AuthGuardService] },
      { path: 'add-compte', component: AddCompteComponent, canActivate: [AuthGuardService] },
      { path: 'list-compte', component: ListCompteComponent, canActivate: [AuthGuardService] },
      { path: 'partenaire-existant', component: PartenaireExistantComponent, canActivate: [AuthGuardService] },
      { path: 'add-depots', component: AddDepotComponent, canActivate: [AuthGuardService] },
      { path: 'add-user-partenaire', component: UserPartenaireComponent, canActivate: [AuthGuardService] },
      { path: 'list-user-partenaire', component: ListUserPartenaireComponent, canActivate: [AuthGuardService] },
      { path: 'list-depots', component: ListDepotComponent, canActivate: [AuthGuardService] },
      { path: 'list-partenaires', component: ListPartenaireComponent, canActivate: [AuthGuardService] },
      { path: 'edit/:id', component: EditUserComponent, canActivate: [AuthGuardService] },
      { path: 'envoi', component: EnvoiComponent, canActivate: [AuthGuardService] },
      { path: 'retrait', component: RetraitComponent, canActivate: [AuthGuardService] },
      { path: 'recu', component: RecuComponent, canActivate: [AuthGuardService] },
      { path: 'list-envois', component: ListeEnvoiComponent, canActivate: [AuthGuardService] },
      { path: 'list-retraits', component: ListeRetraitComponent, canActivate: [AuthGuardService] },
      { path: 'contrat', component: ContratComponent, canActivate: [AuthGuardService] },
      { path: 'add-affectation', component: AddAffectationComponent, canActivate: [AuthGuardService] },
      { path: 'list-part', component: ListPartComponent, canActivate: [AuthGuardService] },

    ]
  },

  { path: 'login', component: FormConnexionComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
