import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { SigupComponent } from './Component/signup/sigup.component';
import { MergeShortComponent } from './Component/merge-short/merge-short.component';

const routes: Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'register',component:SigupComponent},
  {path : 'mergeShort',component:MergeShortComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
