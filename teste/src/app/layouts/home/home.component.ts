import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	nomeUsuario: string;

	ngOnInit(): void {
		this.nomeUsuario = window.localStorage.getItem('nome');
	}
	
	refresh() {
		window.location.reload();
	}

}
