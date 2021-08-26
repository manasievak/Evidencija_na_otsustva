import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Firmi } from './firmi/firmi';
import { Vraboteni } from './vraboteni/vraboteni';
import { Oddeli } from './oddeli/oddeli';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getFirmi() {
    return this.http.get<Firmi[]>('http://localhost/getFirmi.php')
  }

  getVraboteni(firma: Firmi) {
    return this.http.get<Vraboteni[]>('http://localhost/getVraboteni.php?id=' + firma.f_id, httpOptions)
  }

  getOddeli(firma: Firmi) {
    return this.http.get<Oddeli[]>('http://localhost/getOddeli.php?id=' + firma.f_id, httpOptions)
  }

  addVraboten(vraboten: Vraboteni, firma: Firmi, oddel: Oddeli) {
    // console.log(vraboten);
    return this.http.post('http://localhost/addVraboten.php?f_id=' + firma.f_id + '&oddel_id=' + oddel.oddel_id, vraboten);
  }

  addOddel(firma: Firmi, model: Oddeli) {
    return this.http.post('http://localhost/addOddel.php?f_id=' + firma.f_id, model);
  }
}
