import { LivroService } from '../livro.service';
import { Livro } from '../livro.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  livros?: Livro[];

  @Input() pesquisaPorNome: any = '';
  @Input() pesquisaPorAutor: any = '';

  constructor(
    private livroService: LivroService, 
    private router : Router,
    private toastr: ToastrService

    ) {

   }

  ngOnInit(): void {
    this.showLivros();
  }

  ngOnChanges(): void { 

    if(this.pesquisaPorAutor !== '' && this.pesquisaPorAutor != undefined ) {
      this.pesquisarAutor(this.pesquisaPorAutor);
    }

    if(this.pesquisaPorNome !== '' && this.pesquisaPorNome != undefined) {
      this.pesquisarNome(this.pesquisaPorNome);
    }

  }
  

  showLivros(): void {
    this.livroService.read().subscribe((livros: Livro[]) => {
      this.livros = livros;
    });
  }


  alugarLivro(livro: any):void {
    livro.alugado = true;

    this.livroService.alugar(livro.id, livro).subscribe(()=>{
      this.toastr.success('Livro alugado com sucesso!');
      this.router.navigate(['/']);
    });
  }


  pesquisarNome(parametro: any): void {
    this.livroService.readByNome(parametro).subscribe((livro: any):any => {

      if(livro.length !== 0 && parametro !== '') {
        this.livros = livro;
      }
      else if (this.pesquisaPorAutor.length === 0) {
        this.showLivros();
      }

    });
  }

  pesquisarAutor(parametro: any): void {
    this.livroService.readByAutor(parametro).subscribe((livro: any):any => {

      console.log(this.livros?.length);

      if(livro.length !== 0 && parametro !== '') {
        this.livros = livro;
      }
      else if (this.pesquisaPorNome.length === 0) {
        this.showLivros();
      }

    });
  }


  navigateToDetails(id: any) {
    this.router.navigate([`/livros/visualizar/${id}`])
  }

  

}
