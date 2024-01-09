import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  EquityBankCard,
  EquityBankCardActions,
  EquityBankCardContent,
  EquityBankCardHeader,
  EquityBankCardHeaderActions,
  EquityBankCardHeaderSubTitle,
  EquityBankCardHeaderTitle,
} from './card.component';

const cardComponents = [
  EquityBankCard,
  EquityBankCardHeader,
  EquityBankCardHeaderTitle,
  EquityBankCardHeaderSubTitle,
  EquityBankCardHeaderActions,
  EquityBankCardContent,
  EquityBankCardActions,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...cardComponents],
  exports: [...cardComponents],
})
export class EquityBankCardModule {}
