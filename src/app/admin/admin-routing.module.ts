import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'edit', component: EditUserComponent },
  { path: 'profile', component: ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
