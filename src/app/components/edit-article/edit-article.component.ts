import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  
  adunit: any={};
  angForm: FormGroup;
  user:boolean=false;
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService,
    private fb: FormBuilder) {
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

    updateAdArticulo(codigo, articulo_name,description,precio) {
      if(codigo.length==0)
      {
        
        codigo=this.adunit.codigo;
        
      }
      if(articulo_name.length==0)
      {
        
        articulo_name=this.adunit.articulo_name;
        
      }
      if(precio.length==0)
      {
        
        precio=this.adunit.precio;
        
      }
      console.log(codigo)
  
     
          
      this.route.params.subscribe(params => {
          this.adunitservice.updateAdArticulos(codigo,articulo_name,description,precio, params['id']);
          this.router.navigate(['listart']);
      });
     
    }

    ngOnInit() {
      if(localStorage.getItem("user")!=null)
      {
        this.route.params.subscribe(params => {
          this.adunitservice.editAdArticulos(params['id']).subscribe(res => {
            this.adunit = res;
        });
      });
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
