import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  formUser: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    usuario: FormBuilder
  ) {

    this.formUser = usuario.group({
      nome: ["", Validators.required],
      email: ["", Validators.required],
      senha: ["", Validators.required],
  });

   }

  ngOnInit(): void {
  }


  salvarUsuario() {
    this.authService.criarUsuario(this.formUser.value).subscribe((usuario: Usuario) => {
      this.router.navigate(['login']);
    })

  }

}
