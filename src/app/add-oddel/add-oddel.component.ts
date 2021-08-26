import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firmi } from '../firmi/firmi';
import { Oddeli } from '../oddeli/oddeli';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-oddel',
  templateUrl: './add-oddel.component.html',
  styleUrls: ['./add-oddel.component.css']
})
export class AddOddelComponent implements OnInit {
  oddeli!: Oddeli[];
  firma!: Firmi;
  model!: Oddeli;


  constructor(private router: Router, private _services: ServicesService) { }

  ngOnInit(): void {
    this.model = new Oddeli();
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
    this._services.addOddel(this.firma, this.model)
    .subscribe(data => {
      // this.router.navigate(['list']);
      // console.log(this.model);
      window.location.reload();
    })
  }

}
