import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
import {  Router } from '@angular/router';
import { AdUnit } from './AdUnit';
import { AdBodegas } from './AdBodegas';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  adunits: AdUnit[];
  bodegas: AdBodegas[];
  user:boolean=false;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder,private router: Router) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required ],
      unit_price: ['', Validators.required ],
      permition: ['', Validators.required ],
      bodega:['', Validators.required ]
   });
  }

  addAdUnit(unit_name, unit_price,permition,bodega) {
    this.adunitservice.addAdUnit(unit_name, unit_price,permition,bodega);
    this.router.navigate[("index")]
   
    
}


  ngOnInit() {
    if(localStorage.getItem("user")!=null)
    {
      this.user=true;
      this.getBodegas();
    }
    //this.adunitservice.setUserName(localStorage.getItem("user"));// obtener del session storage
   
  }

  getBodegas()
  {
    this.adunitservice
    .getAdBodegas()
    .subscribe((data: AdBodegas[]) => {
    this.bodegas = data;
  });
 
 
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
