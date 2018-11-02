import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = 'http://localhost:4000/adunits';
  uribod='http://localhost:4000/adbodegas';
  uriart='http://localhost:4000/adarticulos';

  constructor(private http: HttpClient) { }

  addAdUnit(unit_name, unit_price,permition,bodega) {
    const obj = {
      user_name: unit_name,
      password: unit_price,
      permition:permition,
      bodega:bodega
    };
    
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

 

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
}


editAdUnit(id) {
 // console.log('passwor :'+ unit_price +" service")
  
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
}

updateAdUnit(unit_name, unit_price,permition, id,bodega) {
 

  const obj = {
    user_name: unit_name,
    password: unit_price,
    permition:permition,
    bodega:bodega
  };
  
 
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

  deleteAdUnit(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
/////////////////////metodos login/////////////////////////
getUser(user) {
  console.log("adunit service user: "+user)
   return this
         .http
         .get(`${this.uri}/get/${user}`);
        

}
setUserName(user)
{
  const obj={
    user_name:user
  };
}

  /////////////////// bodega metodos ////////////////////////
  addAdBodega(bodega_name, encargado) {
    const obj = {
      bodega_name: bodega_name,
      encargado: encargado
    };
    
    
    this.http.post(`${this.uribod}/addB`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAdBodegas() {
    return this
           .http
           .get(`${this.uribod}`);
}


 

  
  deleteAdBodega(id) {
    return this
              .http
              .get(`${this.uribod}/delete/${id}`);
  }

  updateAdBodega(bodega_name, encargado, id) {
 

    const obj = {
      bodega_name: bodega_name,
      encargado: encargado
    };
    console.log(encargado)
   
    this
      .http
      .post(`${this.uribod}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  editAdBodega(id) {
    // console.log('passwor :'+ unit_price +" service")
     
     return this
               .http
               .get(`${this.uribod}/edit/${id}`);
   }
  /////////////////////////////articulos metodos /////////////////////////////////
  addAdArticulo( codigo_articulo,article_name,description,precio_article,bodega) {
    const obj = {
      codigo: codigo_articulo,
      articulo_name: article_name,
      descripcion:description,
      precio: precio_article,
      bodega:bodega


    };
    
    
    this.http.post(`${this.uriart}/addA`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAdArticulos() {
    return this
           .http
           .get(`${this.uriart}`);
}

deleteAdArticulos(id) {
  return this
            .http
            .get(`${this.uriart}/delete/${id}`);
}

updateAdArticulos(codigo_articulo,article_name,description,precio_article, id) {
 

  const obj = {
    codigo: codigo_articulo,
    articulo_name: article_name,
    descripcion:description,
    precio: precio_article,


  };
  console.log(article_name)
 
  this
    .http
    .post(`${this.uriart}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

editAdArticulos(id) {
  // console.log('passwor :'+ unit_price +" service")
   
   return this
             .http
             .get(`${this.uriart}/edit/${id}`);
 }


}
