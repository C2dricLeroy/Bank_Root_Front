import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SpaceHeaderComponent } from './space-header/space-header.component';
import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
  declarations: [],
  imports: [FooterComponent, SpaceHeaderComponent, AccountListComponent],
  exports: [FooterComponent, SpaceHeaderComponent, AccountListComponent],
})
export class CommonComposentModule {}
