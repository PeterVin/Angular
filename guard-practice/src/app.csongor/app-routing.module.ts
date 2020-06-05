import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './components/profile.component';
import {SettingsComponent} from './components/settings.component';
import {WorkersComponent} from './components/workers.component';
import {PermissionGuard} from './permission.guard';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'settings',
    canActivate: [PermissionGuard],
    component: SettingsComponent
  },
  {
    path: 'workers',
    canActivate: [PermissionGuard],
    component: WorkersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
