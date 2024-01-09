import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigPanelComponent } from './config-panel.component';
import { ConfigPanelToggleComponent } from './config-panel-toggle/config-panel-toggle.component';
import { MaterialModule } from '../../../@equity-bank/shared/material-components.module';
import { EquityBankSharedModule } from '../../../@equity-bank/equity-bank-shared.module';

@NgModule({
  imports: [CommonModule, MaterialModule, EquityBankSharedModule],
  declarations: [ConfigPanelComponent, ConfigPanelToggleComponent],
  exports: [ConfigPanelComponent, ConfigPanelToggleComponent],
})
export class ConfigPanelModule {}
