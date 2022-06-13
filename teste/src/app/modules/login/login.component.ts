import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario.model';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


	formUser: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
	});


	constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
	) {}

	ngOnInit(): void {
    
		const token = window.localStorage.getItem('token');
		if(token) {
			this.router.navigate(['/']);
		} 
    
	}

	salvarUsuario() {

		this.authService.login(this.formUser.value).subscribe((usuario: Usuario[]) => {
      
			if(usuario.length === 0) {
				this.toastr.info('Usuário não autenticado', 'Não foi possível realizar o login');
			}
			else{
				window.localStorage.setItem('token', usuario[0].access_token);
				window.localStorage.setItem('nome', usuario[0].nome);
				this.router.navigate(['/']);
				this.toastr.success('Login efetuado com sucesso');
			}
      
		});

	}

}
