import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Nosotros', component:NosotrosComponent},
  {path:'Blog', component: BlogComponent},
  {path:'Servicios', component:ContactoComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
