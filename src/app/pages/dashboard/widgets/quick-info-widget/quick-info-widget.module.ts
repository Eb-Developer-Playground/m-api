import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuickInfoWidgetComponent } from './quick-info-widget.component';
import { MaterialModule } from '../../../../../@equity-bank/shared/material-components.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [QuickInfoWidgetComponent],
  exports: [QuickInfoWidgetComponent],
})
export class QuickInfoWidgetModule {}
