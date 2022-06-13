import { Livro } from '../livro.model';
import { Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-livro-create',
	templateUrl: './livro-create.component.html',
	styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

	livro : Livro = {
		nome: '',
		autor: '',
		paginas: 123,
		sinopse: [''],
		alugado: false,
		id: 0
	};

	formLivro: FormGroup = new FormGroup({

		nome: new FormControl('', [Validators.required]),
		autor: new FormControl('', [Validators.required]),
		paginas: new FormControl(123, [Validators.required]),
		sinopse: new FormControl('', [Validators.required]),
		alugado: new FormControl(false),

	});


	constructor(
    private livroService: LivroService, 
    private router: Router,
    private toastr: ToastrService
	) 
	{ 

	}
	ngOnInit(): void {
		// Not implemented
	}
		

	createLivro(): void {

		const paragrafos = this.formLivro.value.sinopse?.split('\n');
		this.formLivro.value.sinopse = paragrafos;

		this.livroService.create(this.formLivro.value).subscribe((response) => {
			console.log(response);
			this.router.navigate(['/']);
			this.toastr.success('Livro criado com sucesso!');
		});
	}


	voltar(): void {
		this.router.navigate(['/']);
	}

}
