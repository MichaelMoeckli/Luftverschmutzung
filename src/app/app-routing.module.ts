import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirqualityComponent } from './airquality/airquality.component';



const routes: Routes = [ 
  { path: '**', component: AirqualityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
