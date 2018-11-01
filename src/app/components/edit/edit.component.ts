import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUnit } from '../index/AdUnit';
import { AdunitService } from '../../adunit.service';
import { validateConfig } from '@angular/router/src/config';
import { AdBodegas } from './AdBodegas';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  adunit: any={};
  angForm: FormGroup;
  bodegas: AdBodegas[];
  user:boolean=false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
             unit_name: ['', Validators.required ],
              unit_price: ['', Validators.required ],
              permition:['',Validators.required],
              bodega:['', Validators.required ]
         });
      }

    updateAdUnit(unit_name, unit_price,permition,bodega) {
      if(unit_price.length==0)
      {
        
        unit_price=this.adunit.password;
        
      }
      if(permition.length==0)
      {
        permition=this.adunit.permition;
      }
      if(bodega.length==0)
      {
        bodega=this.adunit.bodega;
      }
      console.log("bodega "+bodega);
     
      this.route.params.subscribe(params => {
          this.adunitservice.updateAdUnit(unit_name, unit_price,permition, params['id'],bodega);
          this.router.navigate(['index']);
      });
     
    }

    ngOnInit() {

      if(localStorage.getItem("user")!=null)
      {
        this.route.params.subscribe(params => {
          this.adunitservice.editAdUnit(params['id']).subscribe(res => {
            this.adunit = res;
        });
      });
      this.getBodegas();
      this.user=true;
      }
     
  }
  cambiar(lugar)
  {
    console.log("lugar: "+lugar);
    this.router.navigate([lugar]);
  }
  getBodegas()
  {
    this.adunitservice
    .getAdBodegas()
    .subscribe((data: AdBodegas[]) => {
    this.bodegas = data;
  });
}

logout()
{
  localStorage.clear();
  this.router.navigate(["login"]);
}
}
