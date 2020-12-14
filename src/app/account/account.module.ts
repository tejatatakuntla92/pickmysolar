import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  providers: [],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule ,
    MatButtonModule,
    MatSelectModule
  ]
})
export class AccountModule { }
