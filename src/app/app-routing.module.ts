import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/employees_add/add.component';
import { EditComponent } from './component/employees_edit/edit.component';

const routes: Routes = [
  {path: 'create', component:AddComponent},
  {path: 'edit/:id', component:EditComponent},
  // {path: 'detail/:id',component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
