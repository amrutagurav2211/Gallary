import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlaComponent } from '../Gallary/gla/gla.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const route=[
  {path : "Gla" , component:GlaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)],
    HttpClientModule,
    FormsModule

  ]
})
export class GlaModulModule { }
