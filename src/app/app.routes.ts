import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { authGuardGuard } from './auth-guard.guard';
export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
 
  {
    path: 'dashboard',
  loadChildren: ()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
    canMatch: [authGuardGuard]
  },

];
