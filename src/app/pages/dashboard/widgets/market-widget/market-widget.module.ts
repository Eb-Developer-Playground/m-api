import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarketWidgetComponent } from './market-widget.component';
import { MaterialModule } from '../../../../../@equity-bank/shared/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [MarketWidgetComponent],
  exports: [MarketWidgetComponent]
})
export class MarketWidgetModule {
}
