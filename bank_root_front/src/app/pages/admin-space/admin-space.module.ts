import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSpaceComponent } from './admin-space.component';
import {CommonComposentModule} from "../../components/common.module";

@NgModule({
  declarations: [
    AdminSpaceComponent
  ],
  imports: [
    CommonModule,
    CommonComposentModule,
  ],
  exports: [AdminSpaceComponent],
  bootstrap: [AdminSpaceComponent]
})
export class AdminSpaceModule {

}
