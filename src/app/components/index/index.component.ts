import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];
  user:boolean=false;

  constructor(private adunitservice: AdunitService,private router: Router) { }

  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
      this.getUsers();
    });
  }

  getUsers()
  {
    this.adunitservice
    .getAdUnits()
    .subscribe((data: AdUnit[]) => {
    this.adunits = data;
  });
  }

  ngOnInit() {
    if(localStorage.getItem("user")!=null)
    {
      this.getUsers();
      this.user=true;
    }

    
  }
  cambiar(lugar)
  {
    console.log("lugar: "+lugar);
    this.router.navigate([lugar]);
  }

  logout()
  {
    localStorage.clear()
    this.router.navigate(["login"])
  }
}
