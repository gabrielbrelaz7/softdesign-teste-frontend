import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Livro } from './livro.model';

@Injectable({
	providedIn: 'root',
})
export class LivroService {

	constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

	create(data: Livro) {
		return this.http.post('http://localhost:3000/livros', data);
	}

	read() {

		return this.http.get<Livro[]>('http://localhost:3000/livros');
	}

	update(id: number, data: Livro) {
		return this.http.put(`http://localhost:3000/livros/${id}`, data);
	}

	delete(id: number) {
		return this.http.delete(`http://localhost:3000/livros/${id}`);
	}

	readById(id: string) {
		return this.http.get(`http://localhost:3000/livros/${id}`);
	}

	readByNome(nomeLivro: Livro) {
		return this.http.get(`http://localhost:3000/livros?nome=${nomeLivro}`);
	}

	readByAutor(autor: Livro) {
		return this.http.get(`http://localhost:3000/livros?autor=${autor}`);
	}

	alugar(id: number, data: Livro) {
		return this.http.put(`http://localhost:3000/livros/${id}`, data);
	}
}
