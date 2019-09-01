import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Bus } from 'src/models/bus..model';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css']
})
export class OnibusComponent implements OnInit {

  onibus = [];
  name: String;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getTodosOnibus().subscribe((data: any[]) => {
      console.log(data)
      this.onibus = data
    })
  }

  Procurar() {
    if (this.name != "") {
      this.onibus = this.onibus.filter(res => {
        return res.nome.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
    else if (this.name === "") {
      this.ngOnInit()
    }
  }

}
