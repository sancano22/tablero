import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import {PictogramasComponent} from './pictogramas/pictogramas.component';


const routes: Routes = [
  {path:'', component:CategoriasComponent},
  {path: 'pictogramas/:categoriaId', component: PictogramasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
