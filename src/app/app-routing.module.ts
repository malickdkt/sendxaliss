import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { DefaultComponent } from './components/default/default.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';


const routes: Routes = [
  {path: '', component: DefaultComponent,
children: [
  {path: 'dasboard', component: DasboardComponent}

]
},
  {path: 'login', component: ConnexionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
