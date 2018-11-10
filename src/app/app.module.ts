import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';

import { AdunitService } from './adunit.service';
import { LoginComponent } from './components/login/login.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { CreateBodegaComponent } from './components/create-bodega/create-bodega.component';
import { ListBodegaComponent } from './components/list-bodega/list-bodega.component';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { EditBodegasComponent } from './components/edit-bodegas/edit-bodegas.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'createbod',
    component:  CreateBodegaComponent
  },
  {
    path: 'listbod',
    component:  ListBodegaComponent
  },
  {
    path: 'createart',
    component:  CreateArticleComponent
  },
  {
    path: 'listart',
    component:  ListArticleComponent
  },
  {
    path: 'editart/:id',
    component:  EditArticleComponent
  },
  {
    path: 'editbod/:id',
    component:  EditBodegasComponent
  }
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent,
    LoginComponent,
    CreateArticleComponent,
    CreateBodegaComponent,
    ListBodegaComponent,
    ListArticleComponent,
    EditArticleComponent,
    EditBodegasComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ AdunitService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
