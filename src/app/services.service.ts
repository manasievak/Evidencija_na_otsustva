import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Firmi } from './firmi/firmi';
import { Vraboteni } from './vraboteni/vraboteni';
import { Oddeli } from './oddeli/oddeli';
import { Vidovi } from './vidovi/vidovi';
import { Otsustva } from './otsustva/otsustva';

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
    return this.http.get<Firmi[]>('http://localhost/eotsustva/getFirmi.php')
  }

  // getVraboteni(firma: Firmi) {
  //   return this.http.get<Vraboteni[]>('http://localhost/listVraboteni.php?id=' + firma.f_id, httpOptions)
  // }
  
  getVraboteni(firma: Firmi) {
    return this.http.get<Vraboteni[]>('http://localhost/eotsustva/getVraboteni.php?id=' + firma.f_id, httpOptions)
  }


  getOddeli(firma: Firmi) {
    return this.http.get<Oddeli[]>('http://localhost/eotsustva/getOddeli.php?id=' + firma.f_id, httpOptions)
  }

  getVidovi() {
    return this.http.get<Vidovi[]>('http://localhost/eotsustva/getVidovi.php', httpOptions)
  }

  getOtsustva() {
    return this.http.get<Otsustva[]>('http://localhost/eotsustva/getOtsustva.php')
  }

  addVraboten(vraboten: Vraboteni, firma: Firmi, oddel: Oddeli) {
    // console.log(vraboten);
    return this.http.post('http://localhost/eotsustva/addVraboten.php?f_id=' + firma.f_id + '&oddel_id=' + oddel.oddel_id, vraboten);
  }

  addOddel(firma: Firmi, model: Oddeli) {
    return this.http.post('http://localhost/eotsustva/addOddel.php?f_id=' + firma.f_id, model);
  }

  addOtsustvo(otsustvo:Otsustva, vraboten: Vraboteni, vid: Vidovi) {
    console.log(otsustvo);
    return this.http.post('http://localhost/eotsustva/addOtsustvo.php?v_id=' + vraboten.v_id + '&vid_id=' + vid.vid_id, otsustvo);
  }
}
