import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUser: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    usuario: FormBuilder
  ) {

    this.formUser = usuario.group({
      email: ["", Validators.required],
      senha: ["", Validators.required],
  });

   }

  ngOnInit(): void {
    
    const token = window.localStorage.getItem('token');
    if(token) {
      this.router.navigate(['/']);
    } 
    
  }

  salvarUsuario() {

    this.authService.login(this.formUser.value).subscribe((usuario: Usuario[]) => {
      
      if(usuario.length === 0) {
        console.log("Nenhum usuário");
      }
      else{
        window.localStorage.setItem('token', usuario[0].access_token)
        this.router.navigate(['/'])
      }
      
    })

  }

}
