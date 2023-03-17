import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSpaceComponent } from './admin-space.component';
import { CommonComposentModule } from '../../components/common/common.module';
import { AppModule } from '../../app.module';
import { AdminCardsComponent } from '../../components/admin/admin-cards/admin-cards.component';

@NgModule({
  declarations: [AdminSpaceComponent, AdminCardsComponent],
  imports: [CommonModule, CommonComposentModule],
  exports: [AdminSpaceComponent],
  bootstrap: [AdminSpaceComponent],
})
export class AdminSpaceModule {}
