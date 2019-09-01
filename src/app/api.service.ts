import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getTodosOnibus() {
    return this.http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o')
  }
  public getTodosLotacoes() {
    return this.http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l')
  }
  public getItinerario(id: String){
    return this.http.get(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${id}`)
  }
  public getEndereco(lat: String, lng: String){
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}key=AIzaSyAHvHG1_tc4sn0kgeOp7ee7eYtPNtWO-kI`)
  }
}
