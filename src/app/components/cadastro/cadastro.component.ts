import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private title: Title
    ){
      this.title.setTitle('Cadastro');
    }

  onSave(){
    alert('Termos e Condições')
  }

  ngOnInit(): void {
  }

}
