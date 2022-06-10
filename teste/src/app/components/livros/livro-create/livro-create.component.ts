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
    sinopse: '',
    alugado: false
  }

  formLivro = new FormGroup({

    nome: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    paginas: new FormControl('', [Validators.required]),
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
  
  }

  createLivro(): void {
    this.livroService.create(this.formLivro.value).subscribe(() => {
      this.router.navigate(['/']);
      this.toastr.success('Livro criado com sucesso!');
    })
  }


  cancel(): void {
    this.router.navigate(['/'])
  }

}
