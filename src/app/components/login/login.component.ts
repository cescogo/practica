import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUnit } from './AdUnit';
import {  Router } from '@angular/router';
import { AdunitService } from '../../adunit.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private adunitservice: AdunitService,
    private router: Router,
    private fb: FormBuilder) { this.createForm();}

  adunits: AdUnit[];
  User: AdUnit;
  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      user_name: ['', Validators.required ],
      unit_price: ['', Validators.required ]
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

  login(user,password)
  {
    this.adunitservice.getUser(user).subscribe((dato:AdUnit)=>
    {this.User=dato;
     
      if(dato.user_name==user && dato.password==password)
      {
      if( dato.permition=="administrador" )
    { this.router.navigate(['index']);}
    else 
        {
      this.router.navigate(['listart']);
    }

    
      localStorage.setItem("user",user)
      localStorage.setItem("permiso", dato.permition.toString())
      localStorage.setItem("bodega",dato.bodega.toString())
    }
      else{
        alert("usuario o contrasena incorrecta");
      }
    }
    );
    //console.log("usuario: "+this.User.user_name+" password: "+this.User.password);
    


   /* this.adunits.forEach((dato:AdUnit)=>{
      console.log("user :"+dato.user_name+" pass: "+dato.password);
    if(dato.user_name==user && dato.password==password && dato.permition=="administrador" )
    { this.router.navigate(['index']);
      localStorage.setItem("user",user)}
  });*/
  
  
  }

  ngOnInit() {
   
  }

}
