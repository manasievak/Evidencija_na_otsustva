import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firmi } from '../firmi/firmi';
import { Otsustva } from '../otsustva/otsustva';
import { ServicesService } from '../services.service';
import { Vidovi } from '../vidovi/vidovi';
import { Vraboteni } from '../vraboteni/vraboteni';

@Component({
  selector: 'app-list-otsustva',
  templateUrl: './list-otsustva.component.html',
  styleUrls: ['./list-otsustva.component.css']
})
export class ListOtsustvaComponent implements OnInit {

  otsustva!: Otsustva[];
  // firma!: Firmi;
  vidovi!: Vidovi[];
  vraboteni!: Vraboteni[];
  modelVraboteni!: Vraboteni;

  constructor(private router: Router, private _services: ServicesService) { }

  ngOnInit(): void {
    // this.firma = new Firmi(1);
    this.modelVraboteni = new Vraboteni();
    this._services.getOtsustva()
    .subscribe((data: Otsustva[]) => {
      this.otsustva=data;
      console.log(this.otsustva ) 
    })
  }

}
