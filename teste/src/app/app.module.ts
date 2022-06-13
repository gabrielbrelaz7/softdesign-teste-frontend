import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



import { LivroCreateComponent } from './components/livros/livro-create/livro-create.component';
import { LivroReadComponent } from './components/livros/livro-read/livro-read.component';
import { LivroDetailsComponent } from './components/livros/livro-details/livro-details.component';
import { LivrosComponent } from './modules/livros/livros.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { CriarContaComponent } from './modules/criar-conta/criar-conta.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,

		HeaderComponent,
		FooterComponent,
		LivrosComponent,
		LivroCreateComponent,
		LivroReadComponent,
		LivroDetailsComponent,
		LoginComponent,
		AuthenticationComponent,
		CriarContaComponent
   

	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),

		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatSnackBarModule,
		MatFormFieldModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,


		HttpClientModule,
		FormsModule,
		ReactiveFormsModule

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
