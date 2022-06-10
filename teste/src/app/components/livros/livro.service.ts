import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Livro } from './livro.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class LivroService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // showMensage(msg: string, isError: boolean = false): void {
  //   this.snackBar.open(msg, "x", {
  //     duration: 3000,
  //     horizontalPosition: "center",
  //     verticalPosition: "top",
  //     panelClass: isError ? ['msg-error'] : ['msg-success']
  //   });
  // }

  // create(livro: Livro): Observable<Livro> {
  //   return this.http.post<Livro>(this.baseUrl, livro).pipe(
  //     map(obj => obj),
  //     catchError(e => this.erroHandler(e))
  //   )
  // }

  // erroHandler(e : any): Observable<any>{
  //   this.showMensage('Ocorreu um erro! tente novamente', true)
  //   return EMPTY
  // }

  create(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/livros', data);
  }

  read(): Observable<Livro[]> {

    return this.http.get<Livro[]>('http://localhost:3000/livros');
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/livros/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/livros/${id}`);
  }

  readById(id: any): Observable<any> {
    return this.http.get(`http://localhost:3000/livros/${id}`);
  }

  readByNome(nomeLivro: any): Observable<any> {
    return this.http.get(`http://localhost:3000/livros?nome=${nomeLivro}`);
  }

  readByAutor(autor: any): Observable<any> {
    return this.http.get(`http://localhost:3000/livros?autor=${autor}`);
  }

  alugar(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/livros/${id}`, data);
  }


  // readById(id: number): Observable<Livro> {
  //   const url = `${this.baseUrl}/${id}`
  //   return this.http.get<Livro>(url).pipe(
  //     map(obj => obj),
  //     catchError(e => this.erroHandler(e))
  //   )
  // }

  // update(livro: Livro): Observable<Livro> {
  //   const url = `${this.baseUrl}/${livro.id}`
  //   return this.http.put<Livro>(url,livro).pipe(
  //     map(obj => obj),
  //     catchError(e => this.erroHandler(e))
  //   )
  // }

  // delete(id: number): Observable<Livro> {
  //   const url = `${this.baseUrl}/${id}`
  //   return this.http.delete<Livro>(url).pipe(
  //     map(obj => obj),
  //     catchError(e => this.erroHandler(e))
  //   )
  // }
}
