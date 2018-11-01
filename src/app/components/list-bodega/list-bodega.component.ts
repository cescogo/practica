import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-list-bodega',
  templateUrl: './list-bodega.component.html',
  styleUrls: ['./list-bodega.component.css']
})
export class ListBodegaComponent implements OnInit {

  adunits: AdUnit[];
  user:boolean=false;

  constructor(private adunitservice: AdunitService,private router: Router) { }
  getBodegas()
  {
    this.adunitservice
    .getAdBodegas()
    .subscribe((data: AdUnit[]) => {
    this.adunits = data;
  });
  }
  ngOnInit() {
    if(localStorage.getItem("user")!=null)
    {
      this.getBodegas();
      this.user=true;
    }
    
  }
  cambiar(lugar)
  {
    console.log("lugar: "+lugar);
    this.router.navigate([lugar]);
  }
  deleteAdUnit(id) {
    this.adunitservice.deleteAdBodega(id).subscribe(res => {
      console.log('Deleted');
      //this.router.navigate(["listbod"]);
    });
    
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate[("login")];
  }
}
