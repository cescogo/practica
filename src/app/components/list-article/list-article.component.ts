import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';
import {  Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css'],
  
  
})
export class ListArticleComponent implements OnInit {

  adunits: any[];
  permi: String;
  show:Boolean= false;
  showadmin: boolean=false;
  user:boolean=false;
 cant:number=0;
 seleccionados: Array <any> =[];
 
  
  constructor(private adunitservice: AdunitService,private router: Router, private fb: FormBuilder) { 
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
    this.adunitservice.getAdArticulos()
    .subscribe((data: AdUnit[]) => {
    this.adunits = data;
    
  });
  }
  getArticulosB(bodega)
  {
    this.adunitservice
    .getArticulos(bodega)
    .subscribe((data: AdUnit[]) => {
    this.adunits = data;
  });
  }
  ngOnInit() {
    
    console.log(localStorage.getItem("user"))
    if(localStorage.getItem("user")!=null)
    {
      this.user=true;
      
      if(localStorage.getItem("permiso").toString()=="administrador")
      {
          this.getArticulos();
      }
      else
      {
        this.getArticulosB(localStorage.getItem("bodega").toString());
      }
      
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
  sumar(objeto)
  {
    objeto.seleted=!objeto.seleted;
    if(objeto.seleted)
    {
      this.seleccionados.push(objeto);
      objeto.cantidad= (objeto.cantidad-objeto.cantidadArestar);
      //objeto.cantidadArestar=0;
     
     console.log(this.seleccionados)
    }
    else{
    
          this.seleccionados.splice(this.seleccionados.findIndex(x=>x.codigo==objeto.codigo),1)
          console.log(this.seleccionados)
         

        
      
      
    }
  
  }

}
