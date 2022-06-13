import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario.model';

@Component({
	selector: 'app-criar-conta',
	templateUrl: './criar-conta.component.html',
	styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  
	formUser: FormGroup = new FormGroup({
		nome: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
		alugado: new FormControl(false),
	});

	constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
	) {}

	
	ngOnInit(): void {
		// Not implemented
	}
	
	salvarUsuario() {

		this.formUser.value.access_token = this.gerarToken() ;

		this.authService.criarUsuario(this.formUser.value).subscribe((usuario: Usuario) => {
			if(usuario){
				this.router.navigate(['/login']);
				this.toastr.success('Conta criada com sucesso!', 'Faça o login!');
			}
		});
	}

	gerarToken() {

		const sequenciaAlfaNUmerica = ['A','b','c','d','E','f','G','H','i','J','k','l','m','n','O','p'
			,'q','R','s','T','u','v','X','w','Y','z','1','2','3','4','5','6','7','8','9'];

		function shuffleArray(arr: string[]) {
			for (let i = arr.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
			return arr;
		}

		const shuffleSequencia1 = shuffleArray(sequenciaAlfaNUmerica);
		const shuffleSequencia2 = shuffleArray(sequenciaAlfaNUmerica);
		const shuffleSequencia3 = shuffleArray(sequenciaAlfaNUmerica);
		const novaSequencia = shuffleSequencia1.join('') + shuffleSequencia2.join('') + shuffleSequencia3.join('');
		const access_token = novaSequencia;

		return access_token;
	}


}
