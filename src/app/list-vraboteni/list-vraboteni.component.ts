import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firmi } from '../firmi/firmi';
import { ServicesService } from '../services.service';
import { Vraboteni } from '../vraboteni/vraboteni';


@Component({
  selector: 'app-list-vraboteni',
  templateUrl: './list-vraboteni.component.html',
  styleUrls: ['./list-vraboteni.component.css']
})
export class ListVraboteniComponent implements OnInit {

  vraboteni!: Vraboteni[];
  firma!: Firmi;

  constructor(private router: Router, private _services: ServicesService) { }

  ngOnInit(): void {  
    
    this.firma = new Firmi(1);
    this._services.getVraboteni(this.firma)
    .subscribe((data: Vraboteni[]) => {
      this.vraboteni=data;
      console.log(this.vraboteni) 
    })
  }

  add() {
    // this.id = post.id!;
    this.router.navigate(['add']);
  }

}
