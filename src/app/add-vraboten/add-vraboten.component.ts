import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firmi } from '../firmi/firmi';
import { Oddeli } from '../oddeli/oddeli';
import { ServicesService } from '../services.service';
import { Vraboteni } from '../vraboteni/vraboteni';

@Component({
  selector: 'app-add-vraboten',
  templateUrl: './add-vraboten.component.html',
  styleUrls: ['./add-vraboten.component.css']
})
export class AddVrabotenComponent implements OnInit {

  oddeli!: Oddeli[];
  model = new Vraboteni();
  firma!: Firmi;
  selectedOddel!: Oddeli;

  constructor(private router: Router, private _services: ServicesService) { }

  ngOnInit(): void {
    this.selectedOddel = new Oddeli();
    this.firma = new Firmi(1);
    this._services.getOddeli(this.firma)
    .subscribe((data: Oddeli[]) => {
      this.oddeli=data;
      console.log(this.oddeli) 
    })
  }

  onSubmit() {
    // console.log(this.model);
    // console.log(this.selectedOddel.oddel_id);
    this._services.addVraboten(this.model, this.firma, this.selectedOddel)
    .subscribe(data => {
      this.router.navigate(['list']);
    })
  }

}
