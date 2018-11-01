import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  angForm: FormGroup;
  user:boolean=false;
  
  constructor(private adunitservice: AdunitService, private fb: FormBuilder,private router: Router) 
  {
    this.createForm();
  }

   createForm() {
    this.angForm = this.fb.group({
      codigo: ['', Validators.required ],
      articulo_name: ['', Validators.required ],
      description: ['', Validators.required ],
      precio: ['', Validators.required ]
   });
  }

  
  addAdArticulo( codigo_articulo,article_name,description,precio) {
    this.adunitservice.addAdArticulo(codigo_articulo,article_name,description,precio);
    
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
