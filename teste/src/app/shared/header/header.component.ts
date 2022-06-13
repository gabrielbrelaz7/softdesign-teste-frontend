import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(
    private router: Router,
    private toastr: ToastrService
	) { }
	
	ngOnInit(): void {
		// Not implemented
	}

	logout() {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('nome');
		this.router.navigate(['login']);
		this.toastr.success('Deslogado com sucesso!');
	}

}
