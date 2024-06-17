import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyzRoutingModule } from './xyz/xyz-routing.module';


const routes: Routes = [{
  path: '',
  loadChildren:() => import('./xyz/xyz-routing.module').then(m=> m.XyzRoutingModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),XyzRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
