
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
