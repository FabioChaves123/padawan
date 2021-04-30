import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { ContactPageComponent } from './contact-page/contact-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent} from './calculadora/calculadora.component';

const routes:Routes =[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'form', component: FormPageComponent},
  {path: 'Calculadora', component: CalculadoraComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
    
})
export class AppRoutingModule { }
