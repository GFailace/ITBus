import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-itinerarios',
  templateUrl: './itinerarios.component.html',
  styleUrls: ['./itinerarios.component.css']
})
export class ItinerariosComponent implements OnInit {

  iti = [];
  end = [];
  id = this.route.snapshot.params['id']

  constructor(private apiService: ApiService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.apiService.getItinerario(this.route.snapshot.params['id']).subscribe((data: any[]) => {
      console.log(data)
      this.iti = data
    })
  }
}

