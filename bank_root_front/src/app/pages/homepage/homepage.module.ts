import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { CommonComposentModule } from '../../components/common/common.module';

import { HomeBodyComponent } from '../../components/home/home-body/home-body.component';
import { HomeHeaderComponent } from '../../components/home/home-header/home-header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HomepageComponent, HomeBodyComponent, HomeHeaderComponent],
  imports: [CommonModule, CommonComposentModule, RouterLink],
  exports: [HomepageComponent],
  bootstrap: [HomepageComponent],
})
export class HomepageModule {}
