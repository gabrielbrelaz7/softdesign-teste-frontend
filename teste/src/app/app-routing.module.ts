import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroCreateComponent } from './components/livros/livro-create/livro-create.component';
import { LivroDetailsComponent } from './components/livros/livro-details/livro-details.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { HomeComponent } from './layouts/home/home.component';
import { CriarContaComponent } from './modules/criar-conta/criar-conta.component';
import { LivrosComponent } from './modules/livros/livros.component';
import { LoginComponent } from './modules/login/login.component';
import { GuardsGuard } from './shared/auth/guards.guard';

const routes: Routes = [

  {
    path:"",
    component: HomeComponent,
    children: [
      {
        path:"",
        component: LivrosComponent,
      },
      {
        path:"livros/criar",
        component: LivroCreateComponent,
      },
      {
        path:"livros/visualizar/:id",
        component: LivroDetailsComponent,
      },
    ],
    canActivate: [GuardsGuard]
    
  },

  {
    path:"",
    component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'criar-conta', component: CriarContaComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
