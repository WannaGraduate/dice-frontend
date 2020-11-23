import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDatagridComponent } from './components/user-datagrid.component';
import { ClarityModule } from '@clr/angular';
import { UserService } from './user.service';
import { UserAddComponent } from './containers/user-add.component';
import { UserFormComponent } from './components/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './containers/user-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserDatagridComponent,
    UserListComponent,
    UserAddComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [UserService],
})
export class UserModule { }
