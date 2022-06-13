import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

	constructor(private router : Router) {}

	canActivate(): boolean {

		const token = window.localStorage.getItem('token');
		if(token) {
			return true;
		} else {
			this.router.navigate(['login']);
			return false;
		}
	}
  
}
