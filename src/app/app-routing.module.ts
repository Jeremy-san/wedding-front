import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestFormComponent } from './components/guest-form/guest-form.component';


const routes: Routes = [
  {
    path: 'guest-form', component: GuestFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
