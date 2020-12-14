import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherComponent } from './teacher/teacher.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TeacherRoutingModule } from './teacher-routing.module';


@NgModule({
  declarations: [ TeacherComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule ,
    MatSelectModule
  ]
})
export class TeacherModule { }
