import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalSpaceComponent } from './personal-space.component';
import { CommonComposentModule } from '../../components/common/common.module';
import { PersonalNavComponent } from '../../components/personal-space/personal-nav/personal-nav.component';
import { AccountInformationsComponent } from '../../components/personal-space/account-informations/account-informations.component';
import { PersonalActionsComponent } from '../../components/personal-space/personal-actions/personal-actions.component';
import { LastTransactionComponent } from '../../components/personal-space/last-transaction/last-transaction.component';

@NgModule({
  declarations: [
    PersonalSpaceComponent,
    PersonalNavComponent,
    AccountInformationsComponent,
    PersonalActionsComponent,
    LastTransactionComponent,
  ],
  imports: [CommonModule, CommonComposentModule],
})
export class PersonalSpaceModule {}
