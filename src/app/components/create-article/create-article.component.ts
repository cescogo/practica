import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
import {  Router } from '@angular/router';
import { AdBodegas } from './AdBodegas';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  angForm: FormGroup;
  user:boolean=false;
  bodegas: AdBodegas[];
  
  constructor(private adunitservice: AdunitService, private fb: FormBuilder,private router: Router) 
  {
    this.createForm();
  }

   createForm() {
    this.angForm = this.fb.group({
      codigo: ['', Validators.required ],
      articulo_name: ['', Validators.required ],
      description: ['', Validators.required ],
      precio: ['', Validators.required ],
      bodega:['', Validators.required ]
   });
  }

  
  addAdArticulo( codigo_articulo,article_name,description,precio,bodega) {
    this.adunitservice.addAdArticulo(codigo_articulo,article_name,description,precio,bodega);
    this.router.navigate[("createart")]
    
  }

  ngOnInit() {
    if(localStorage.getItem("user")!=null)
    {
      this.user=true;
      this.adunitservice.setUserName(localStorage.getItem("user"));// obtener del session storage
      this.getBodegas();
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

  getBodegas()
  {
    this.adunitservice
    .getAdBodegas()
    .subscribe((data: AdBodegas[]) => {
    this.bodegas = data;
  });
 
}
