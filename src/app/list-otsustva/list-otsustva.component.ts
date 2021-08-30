import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firmi } from '../firmi/firmi';
import { Otsustva } from '../otsustva/otsustva';
import { ServicesService } from '../services.service';
import { Vidovi } from '../vidovi/vidovi';

@Component({
  selector: 'app-list-otsustva',
  templateUrl: './list-otsustva.component.html',
  styleUrls: ['./list-otsustva.component.css']
})
export class ListOtsustvaComponent implements OnInit {

  otsustva!: Otsustva[];
  // firma!: Firmi;
  vidovi!: Vidovi[];

  constructor(private router: Router, private _services: ServicesService) { }

  ngOnInit(): void {
    // this.firma = new Firmi(1);
    this._services.getVidovi()
    .subscribe((data: Vidovi[]) => {
      this.vidovi=data;
      console.log(this.vidovi ) 
    })
  }

}
