import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-create-bodega',
  templateUrl: './create-bodega.component.html',
  styleUrls: ['./create-bodega.component.css']
})
export class CreateBodegaComponent implements OnInit {

  angForm: FormGroup;
  user:boolean=false;
  
  constructor(private adunitservice: AdunitService, private fb: FormBuilder,private router: Router) 
  {
    this.createForm();
  }

   createForm() {
    this.angForm = this.fb.group({
      bodega_name: ['', Validators.required ],
      encargado: ['', Validators.required ]
   });
  }

  
  addAdBodega(bodega_name, encargado) {
    this.adunitservice.addAdBodega(bodega_name, encargado);
    
  }

  ngOnInit() {
    if(localStorage.getItem("user")!=null)
    {
      this.user=true;
    this.adunitservice.setUserName(localStorage.getItem("user"));// obtener del session storage
    }
  }
  cambiar(lugar)
  {
    console.log("lugar: "+lugar);
    this.router.navigate([lugar]);
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(["login"])
  }

}

// falta