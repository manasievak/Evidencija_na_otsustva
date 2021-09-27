import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firmi } from '../firmi/firmi';
import { Otsustva } from '../otsustva/otsustva';
import { ServicesService } from '../services.service';
import { Vidovi } from '../vidovi/vidovi';
import { Vraboteni } from '../vraboteni/vraboteni';

@Component({
  selector: 'app-add-otsustvo',
  templateUrl: './add-otsustvo.component.html',
  styleUrls: ['./add-otsustvo.component.css']
})
export class AddOtsustvoComponent implements OnInit {

  vraboteni!: Vraboteni[];
  vidovi!: Vidovi[];
  model = new Otsustva();
  firma!: Firmi;
  selectedVraboten!: Vraboteni;
  selectedVid!: Vidovi;

  constructor(private router: Router, private _services: ServicesService) { }

  ngOnInit(): void {
    this.selectedVraboten = new Vraboteni();
    this.selectedVid = new Vidovi();
    this.firma = new Firmi(1);
    this._services.getVraboteni(this.firma)
    .subscribe((data: Vraboteni[]) => {
      this.vraboteni=data;
      console.log(this.vraboteni) 
    })
    this._services.getVidovi()
    .subscribe((data: Vidovi[]) => {
      this.vidovi=data;
      console.log(this.vidovi) 
    })
  }

  onSubmit() {
    // console.log(this.model);
    // console.log(this.selectedOddel.oddel_id);
    this._services.addOtsustvo(this.model, this.selectedVraboten, this.selectedVid)
    .subscribe(data => {
      this.router.navigate(['listOtsustva']);
    })
  }

}
