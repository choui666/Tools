import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {componentArr, prividers} from "./index";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...componentArr],
  providers:[...prividers],
  exports:[...componentArr]
})
export class ToolsModule { }
