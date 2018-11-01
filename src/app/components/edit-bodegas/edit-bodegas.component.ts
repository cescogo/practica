import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';



@Component({
  selector: 'app-edit-bodegas',
  templateUrl: './edit-bodegas.component.html',
  styleUrls: ['./edit-bodegas.component.css']
})
export class EditBodegasComponent implements OnInit {

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
             bodega_name: ['', Validators.required ],
              encargado: ['', Validators.required ]
         });
      }

    updateAdUnit(bodega_name, encargado) {
      if(encargado.length==0)
      {
        
        encargado=this.adunit.encargado;
        
      }
  
     
          
      this.route.params.subscribe(params => {
          this.adunitservice.updateAdBodega(bodega_name, encargado, params['id']);
          this.router.navigate(['listbod']);
      });
     
    }

    ngOnInit() {
      if(localStorage.getItem("user")!=null)
      {
        this.route.params.subscribe(params => {
          this.adunitservice.editAdBodega(params['id']).subscribe(res => {
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
