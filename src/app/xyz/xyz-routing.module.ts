import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path:'delete', component:DeleteComponent
  },
  {
    path: 'about' , component: AboutComponent
  },
  {
    path: 'user' , component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XyzRoutingModule { }
