import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Credenciais } from './credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais= {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(    
    private title: Title
    ){
      this.title.setTitle('Login');
    }

  ngOnInit(): void {
  }

  logar() {
    this.creds.senha= '';
  }

  ValidaCampos(): boolean {
    return this.email.valid && this.senha.valid
  
  }

}
