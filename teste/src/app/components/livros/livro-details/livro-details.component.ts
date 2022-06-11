import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from '../livro.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-details',
  templateUrl: './livro-details.component.html',
  styleUrls: ['./livro-details.component.css']
})


export class LivroDetailsComponent implements OnInit {

  livro : Livro = {
    nome: '',
    autor: '',
    paginas: 232,
    sinopse: '',
    alugado: false
  }

  sinopse: any;


  formEdit: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    paginas: new FormControl('', [Validators.required]),
    sinopse: new FormControl('', [Validators.required]),
    alugado: new FormControl(false),
  });

  constructor(
    private livroService: LivroService, 
    private router: Router, 
    private route: ActivatedRoute,
    private toastr: ToastrService
    
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.livroService.readById(id).subscribe((livro: any) => {
      this.livro = livro
      this.sinopse = livro.sinopse
    })
  }

  updateLivro():void {

    let paragrafos = this.formEdit.value.sinopse?.split('\n');
    this.formEdit.value.sinopse = paragrafos;

    this.livroService.update(this.livro.id, this.formEdit.value).subscribe(()=>{
      this.toastr.success('Livro editado com sucesso!');
      this.router.navigate(['/']);
    });
    
  }


  deleteLivro():void {
    this.livroService.delete(this.livro.id).subscribe(()=>{
      this.toastr.success('Livro deletado com sucesso!');
      this.router.navigate(['/']);
    });
  }


  alugarLivro():void {
    this.livro.alugado = true;

    this.livroService.alugar(this.livro.id, this.livro).subscribe(()=>{
      this.toastr.success('Livro alugado com sucesso!');
      this.router.navigate(['/']);
    });
  }
  

  voltar():void {
    this.router.navigate(['/'])
  }
}
