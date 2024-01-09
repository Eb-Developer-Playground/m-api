import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuickpanelComponent } from './quickpanel.component';
import { MaterialModule } from '../../../@equity-bank/shared/material-components.module';
import { ScrollbarModule } from '../../../@equity-bank/shared/scrollbar/scrollbar.module';

@NgModule({
  imports: [CommonModule, MaterialModule, ScrollbarModule],
  declarations: [QuickpanelComponent],
  exports: [QuickpanelComponent],
})
export class QuickpanelModule {}
