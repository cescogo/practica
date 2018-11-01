import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  adunits: AdUnit[];
  permi: String;
  show:Boolean= false;
  showadmin: boolean=false;
  user:boolean=false;
  constructor(private adunitservice: AdunitService,private router: Router) { 
    this.permi=localStorage.getItem("permiso");
    if(this.permi=="administrador")
    {
      this.show=true;
      this.showadmin=true;
    }

    if(this.permi=="admin")
    {
      this.showadmin=true;
    }
  }
  getArticulos()
  {
    this.adunitservice
    .getAdArticulos()
    .subscribe((data: AdUnit[]) => {
    this.adunits = data;
  });
  }
  ngOnInit() {
    this.getArticulos();
    console.log(localStorage.getItem("user"))
    if(localStorage.getItem("user")!=null)
    {
      this.user=true;
    }
  }
  cambiar(lugar)
  {
    console.log("lugar: "+lugar);
    this.router.navigate([lugar]);
  }
  deleteAdArticulo(id) {
    this.adunitservice.deleteAdArticulos(id).subscribe(res => {
      console.log('Deleted');
      //this.router.navigate(["listbod"]);
    });
  }

  logout()
  {
    localStorage.clear();
    this.cambiar("login");
  }

}
