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
  constructor(private adunitservice: AdunitService,private router: Router) { 
    this.permi=localStorage.getItem("permiso");
    if(this.permi=="consul")
    {
      this.show=true;
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

}
