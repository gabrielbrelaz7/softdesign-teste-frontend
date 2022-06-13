import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-livros',
	templateUrl: './livros.component.html',
	styleUrls: ['./livros.component.css']
})

export class LivrosComponent implements OnInit {

	pesquisaPorNome: string | undefined;
	pesquisaPorAutor: string | undefined;

	constructor(private router : Router) { }

	
	ngOnInit(): void {
	}

	navigateToLivroCreate(): void {
		this.router.navigate(['/livros/criar']);
		console.log(this.pesquisaPorNome);
	}

	getNome(event: any) {
		this.pesquisaPorNome = event.target.value;
	}

	getAutor(event: any) {
		this.pesquisaPorAutor = event.target.value;
	}

}
