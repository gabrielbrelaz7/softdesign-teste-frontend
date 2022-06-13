import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.model';
import { map, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthService {

	constructor(private http: HttpClient) { }


	login(usuario: Usuario): Observable<Usuario[]> {
		return this.http.get<Usuario[]>(
			`http://localhost:3000/usuarios?email=${usuario.email}&senha=${usuario.senha}`
		).pipe(
			map(obj => obj)); 
	}

	criarUsuario(usuario: Usuario): Observable<Usuario> {
		return this.http.post<Usuario>('http://localhost:3000/usuarios', usuario);
	}
  
}
