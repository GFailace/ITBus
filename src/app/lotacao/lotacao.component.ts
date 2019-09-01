import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.css']
})
export class LotacaoComponent implements OnInit {

  lotacoes = [];
  name: String;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getTodosLotacoes().subscribe((data: any[]) => {
      console.log(data)
      this.lotacoes = data
    })
  }

  Procurar() {
    if (this.name != "") {
      this.lotacoes = this.lotacoes.filter(res => {
          return res.nome.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
    else if (this.name === "") {
      this.ngOnInit()
    }
  }

}
